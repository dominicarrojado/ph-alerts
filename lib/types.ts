import { ReactNode } from "react";
import { GoogleAnalyticsEvent, Routes, SubscriptionTopic } from "./enums";

export type SubscriptionTopics = Array<SubscriptionTopic>;
export type Subscription = {
  user: {
    email: string;
  };
  topics: SubscriptionTopics;
};

export type NotificationSetting = {
  id: SubscriptionTopic;
  title: string;
  description: ReactNode;
  topicRoute?: Routes;
};
export type NotificationSettings = Array<NotificationSetting>;

export type EventSubscribeFormSubmit = {
  event: GoogleAnalyticsEvent.SUBSCRIBE_FORM_SUBMIT;
  buttonText: string;
};

export type EventUnsubscribeFormSubmit = {
  event: GoogleAnalyticsEvent.UNSUBSCRIBE_FORM_SUBMIT;
  buttonText: string;
};

export type DepositRate = {
  tenure: number;
  rate: number;
  previousRate?: number;
  bank: string;
  minDeposit: number;
  endDate: string;
  link: string;
};

export type DepositRates = Array<DepositRate>;

export type DepositRatesInfo = {
  items: DepositRates;
  updatedAt: string;
};

export interface Flight {
  id: string;
  shareUrl: string;
  destinationCityCode: string;
  destinationCityName: string;
  currency: string;
  price: number;
  previousPrice?: number;
  departureDate: string;
  returnDate: string;
  isNoLongerAvailable?: boolean;
}

export type Flights = Array<Flight>;

export type FlightsInfo = {
  items: Flights;
  updatedAt: string;
};

export type CoeBidding = {
  category: string;
  title: string;
  quota: number;
  qp: number;
  previousQp?: number;
  pqp: number;
  previousPqp?: number;
};

export type CoeBiddings = Array<CoeBidding>;

export type CoeBiddingsInfo = {
  items: CoeBiddings;
  updatedAt: string;
};
