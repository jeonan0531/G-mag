let initialized = false;
let previousPageLocation = null;

function initializeAnalytics() {
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
  const hostname = process.env.REACT_APP_GA_HOSTNAME;

  // Only collect visits to the production site, never localhost or deploy previews.
  if (
    process.env.NODE_ENV !== "production" ||
    !/^G-[A-Z0-9]+$/.test(measurementId || "") ||
    window.location.hostname !== hostname
  ) {
    return null;
  }

  if (!initialized) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    // History-based page views must also stay disabled in the GA web stream.
    window.gtag("config", measurementId, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    initialized = true;
  }

  return measurementId;
}

export function trackPageView({ pagePath, pageTitle }) {
  const measurementId = initializeAnalytics();
  if (!measurementId) return;

  const pageLocation = new URL(pagePath, window.location.origin).href;
  // Ignore repeat effects for the current page, but allow revisits after navigation.
  if (pageLocation === previousPageLocation) return;

  window.gtag("event", "page_view", {
    send_to: measurementId,
    page_location: pageLocation,
    page_title: pageTitle,
    page_referrer: previousPageLocation || document.referrer,
  });
  previousPageLocation = pageLocation;
}
