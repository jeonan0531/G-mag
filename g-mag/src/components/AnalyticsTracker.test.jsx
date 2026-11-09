import React, { StrictMode } from "react";
import { act, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import AnalyticsTracker from "./AnalyticsTracker";
import reporters from "../pages/reporters";

test("tracks initial article, navigation and back once each with correct titles in StrictMode", async () => {
  const originalEnv = process.env;
  const originalTitle = document.title;
  process.env = {
    ...originalEnv,
    NODE_ENV: "production",
    REACT_APP_GA_MEASUREMENT_ID: "G-TEST123",
    REACT_APP_GA_HOSTNAME: window.location.hostname,
  };
  const article = reporters[0];
  const nextArticle = reporters[1];
  const articlePath = `/post/${encodeURIComponent(article.reporter)}/${article.id}`;
  const nextPath = `/post/${encodeURIComponent(nextArticle.reporter)}/${nextArticle.id}`;
  const router = createMemoryRouter(
    [{ path: "*", element: <AnalyticsTracker /> }],
    { initialEntries: [articlePath] }
  );
  const getViews = () => window.dataLayer.filter((command) => command[0] === "event");
  let view;

  try {
    view = render(<StrictMode><RouterProvider router={router} /></StrictMode>);
    expect(getViews()).toHaveLength(1);
    expect(document.title).toBe(`${article.title} | German Magazine`);
    expect(getViews()[0][2].page_title).toBe(document.title);

    await act(async () => { await router.navigate(nextPath); });
    expect(getViews()).toHaveLength(2);
    expect(getViews()[1][2].page_title).toBe(`${nextArticle.title} | German Magazine`);
    expect(getViews()[1][2].page_referrer).toBe(getViews()[0][2].page_location);

    await act(async () => { await router.navigate(-1); });
    expect(getViews()).toHaveLength(3);
    expect(getViews()[2][2].page_location).toBe(getViews()[0][2].page_location);
    expect(getViews()[2][2].page_referrer).toBe(getViews()[1][2].page_location);

    await act(async () => { await router.navigate(articlePath + "#section"); });
    expect(getViews()).toHaveLength(3);

    await act(async () => { await router.navigate("/quiz"); });
    expect(getViews()).toHaveLength(4);
    expect(document.title).toBe("독문벨 준비 | German Magazine");
    expect(getViews()[3][2].page_title).toBe(document.title);

    await act(async () => { await router.navigate("/post/unknown/999"); });
    expect(getViews()).toHaveLength(4);
  } finally {
    if (view) view.unmount();
    router.dispose();
    process.env = originalEnv;
    document.title = originalTitle;
    delete window.gtag;
    delete window.dataLayer;
    document.querySelectorAll('script[src*="googletagmanager.com"]').forEach(
      (script) => script.remove()
    );
  }
});
