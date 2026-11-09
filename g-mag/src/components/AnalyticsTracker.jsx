import { useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { trackPageView } from "../analytics";
import reporters from "../pages/reporters";

const PAGE_TITLES = {
  "/": "German Magazine",
  "/about": "젊은 매거진이란? | German Magazine",
  "/exchange": "교환학생 이야기 | German Magazine",
  "/memoir": "활동 회고 | German Magazine",
  "/postlist": "전체 기사 | German Magazine",
  "/quiz": "독문벨 준비 | German Magazine",
};

export default function AnalyticsTracker() {
  const { pathname, search } = useLocation();
  const postMatch = useMatch("/post/:name/:id");
  const post = postMatch && reporters.find(
    (item) => item.reporter === postMatch.params.name &&
      item.id === Number(postMatch.params.id)
  );
  const pageTitle = post
    ? `${post.title} | German Magazine`
    : PAGE_TITLES[pathname.replace(/\/+$/, "").toLowerCase() || "/"];

  useEffect(() => {
    if (!pageTitle) return;

    document.title = pageTitle;
    trackPageView({ pagePath: pathname + search, pageTitle });
  }, [pathname, search, pageTitle]);

  return null;
}
