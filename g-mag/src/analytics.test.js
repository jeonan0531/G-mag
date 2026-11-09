const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    NODE_ENV: "production",
    REACT_APP_GA_MEASUREMENT_ID: "G-TEST123",
    REACT_APP_GA_HOSTNAME: window.location.hostname,
  };
});

afterEach(() => {
  process.env = originalEnv;
  delete window.gtag;
  delete window.dataLayer;
  delete document.referrer;
  document.querySelectorAll('script[src*="googletagmanager.com"]').forEach(
    (script) => script.remove()
  );
});

test.each([
  ["development", { NODE_ENV: "development" }],
  ["localhost with production settings", { REACT_APP_GA_HOSTNAME: "g-mag.netlify.app" }],
  ["a different hostname", { REACT_APP_GA_HOSTNAME: "another-site.netlify.app" }],
  ["missing measurement ID", { REACT_APP_GA_MEASUREMENT_ID: "" }],
  ["a GTM container ID", { REACT_APP_GA_MEASUREMENT_ID: "GTM-TEST123" }],
])("does not load a tag or queue events for %s", (_, overrides) => {
  Object.assign(process.env, overrides);
  const { trackPageView } = require("./analytics");

  trackPageView({ pagePath: "/", pageTitle: "German Magazine" });

  expect(window.dataLayer).toBeUndefined();
  expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();
});

test("loads one tag and queues one view despite repeated calls before the tag loads", () => {
  const { trackPageView } = require("./analytics");
  const page = { pagePath: "/", pageTitle: "German Magazine" };

  trackPageView(page);
  trackPageView(page);

  const commands = window.dataLayer.map((command) => Array.from(command));
  expect(commands).toEqual([
    ["js", expect.any(Date)],
    ["config", "G-TEST123", { send_page_view: false }],
    ["event", "page_view", {
      send_to: "G-TEST123",
      page_location: window.location.origin + "/",
      page_title: "German Magazine",
      page_referrer: document.referrer,
    }],
  ]);
  const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
  expect(scripts).toHaveLength(1);
  expect(scripts[0].src).toBe("https://www.googletagmanager.com/gtag/js?id=G-TEST123");
  expect(scripts[0].async).toBe(true);
});

test("preserves campaign parameters and updates referrers, including return visits", () => {
  Object.defineProperty(document, "referrer", {
    configurable: true,
    value: "https://www.google.com/",
  });
  const { trackPageView } = require("./analytics");
  const landingPath = "/?utm_source=instagram&utm_medium=social";
  const articlePath = "/post/" + encodeURIComponent("이주현") + "/3";

  trackPageView({ pagePath: landingPath, pageTitle: "German Magazine" });
  trackPageView({ pagePath: articlePath, pageTitle: "기사 제목" });
  trackPageView({ pagePath: landingPath, pageTitle: "German Magazine" });

  const views = window.dataLayer.filter((command) => command[0] === "event");
  expect(views).toHaveLength(3);
  expect(views[0][2].page_location).toBe(window.location.origin + landingPath);
  expect(views[0][2].page_referrer).toBe("https://www.google.com/");
  expect(views[1][2].page_referrer).toBe(views[0][2].page_location);
  expect(views[2][2].page_referrer).toBe(views[1][2].page_location);
});
