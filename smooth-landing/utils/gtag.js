import config from "../utils/app.config";

export const GA_TRACKING_ID = config.ga_4;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (eventName, eventParamater) => {
    window.gtag("event", eventName, eventParamater);
};