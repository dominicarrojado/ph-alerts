import { SITE_NAME } from "./constants";
import { checkIsLocalhost } from "./location";
import {
  EventSubscribeFormSubmit,
  EventUnsubscribeFormSubmit,
  EventTopicClick,
  EventToastOpen,
  EventToastClose,
  EventToastClick,
} from "./types";

declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>;
  }
}

export function trackEvent(
  data:
    | EventSubscribeFormSubmit
    | EventUnsubscribeFormSubmit
    | EventTopicClick
    | EventToastOpen
    | EventToastClose
    | EventToastClick,
) {
  if (checkIsLocalhost()) {
    return;
  }

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push({
    ...data,
    projectTitle: SITE_NAME,
  });
}
