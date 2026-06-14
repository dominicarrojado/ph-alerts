import { Anchor } from "@/components/ui/anchor";
import {
  NotificationSettings,
  SubscriptionTopics,
  TelegramPublicChannels,
} from "./types";
import {
  Routes,
  SubscriptionTopic,
  TelegramChannel,
  TopicTitle,
} from "./enums";
import { OWNER_EMAIL } from "./constants";

export const MAIN_MENU_ITEMS = [
  {
    title: "Home",
    href: Routes.Home,
  },
  {
    title: "About",
    href: Routes.About,
  },
  {
    title: "How It Works",
    href: Routes.HowItWorks,
  },
];

export const CATEGORY_ITEMS = [
  {
    emoji: "✈️",
    title: "Travel",
    description: "Flight Prices, Travel Deals, Promotions",
    href: Routes.TravelCategory,
  },
  {
    emoji: "📄",
    title: "Exam Results",
    description: "PRC Licensure Exam Results",
    href: Routes.ExamResultsCategory,
  },
];

export const TOPICS_MENU_ITEMS = [
  {
    title: "Cebu Pacific Flights",
    href: Routes.CebuPacificFlights,
  },
  {
    title: "and more...",
    href: "",
  },
];

export const NOTIFICATION_SETTINGS: NotificationSettings = [
  {
    id: SubscriptionTopic.FlightsCebuPacific,
    title: "✈️ Flight Prices (Cebu Pacific)",
    description: (
      <>
        Receive email notifications when the flight prices goes down for{" "}
        <strong className="font-medium">Cebu Pacific flights</strong> departing
        from the Philippines.
      </>
    ),
    topicRoute: Routes.CebuPacificFlights,
  },
  {
    id: SubscriptionTopic.TravelDealsTripComPh,
    title: "🌏 Travel Deals (Trip.com)",
    description: (
      <>
        Receive email notifications when there are new travel deals from{" "}
        <Anchor href="https://ph.trip.com/sale/deals" isExternal>
          Trip.com
        </Anchor>
        .
      </>
    ),
  },
  {
    id: SubscriptionTopic.TravelDealsTravelokaPh,
    title: "🌏 Travel Deals (Traveloka)",
    description: (
      <>
        Receive email notifications when there are new travel deals from{" "}
        <Anchor href="https://www.traveloka.com/en-ph/promotion" isExternal>
          Traveloka
        </Anchor>
        .
      </>
    ),
  },
  {
    id: SubscriptionTopic.TravelDealsPhilippineAirlines,
    title: "🌏 Travel Deals (Philippine Airlines)",
    description: (
      <>
        Receive email notifications when there are new travel deals from{" "}
        <Anchor
          href="https://www.philippineairlines.com/promo-offers"
          isExternal
        >
          Philippine Airlines
        </Anchor>
        .
      </>
    ),
  },
  {
    id: SubscriptionTopic.PrcResults,
    title: "📄 Licensure Examination Results (PRC)",
    description: (
      <>
        Receive email notifications when there are new licensure examination
        results from{" "}
        <Anchor href="https://www.prc.gov.ph/" isExternal>
          Professional Regulation Commission
        </Anchor>
        .
      </>
    ),
  },
  {
    id: SubscriptionTopic.FeaturesPhAlerts,
    title: "🚀 New Features & Alerts",
    description: (
      <>
        Receive email notifications when there are new feature(s) or alert(s) to
        subscribe to at PH Alerts. <br />
        <small>
          Have a suggestion or feedback? Drop me an{" "}
          <Anchor href={`mailto:${OWNER_EMAIL}`}>email</Anchor>.
        </small>
      </>
    ),
  },
];

export const NEW_FEATURES_NOTIFICATION_SETTING = NOTIFICATION_SETTINGS.find(
  ({ id }) => id === SubscriptionTopic.FeaturesPhAlerts,
)!;

export const EXAM_RESULTS_NOTIFICATION_SETTINGS: NotificationSettings = [
  {
    id: SubscriptionTopic.PrcResults,
    title: "📄 Licensure Examination Results (PRC)",
    description: (
      <>
        Receive email notifications when there are new licensure examination
        results from{" "}
        <Anchor href="https://www.prc.gov.ph/" isExternal>
          Professional Regulation Commission
        </Anchor>
        .
      </>
    ),
  },
];

export const CEBU_PACIFIC_TELEGRAM_CHANNELS: TelegramPublicChannels = [
  {
    id: TelegramChannel.CebuPacificFlights,
    title: "✈️ Flight Prices (Cebu Pacific)",
    description: (
      <>
        Receive notifications when there&apos;s Piso Sale for{" "}
        <strong className="font-medium">Cebu Pacific flights</strong> departing
        from the Philippines.
      </>
    ),
    topicRoute: Routes.CebuPacificFlights,
  },
];

export const TRAVEL_TELEGRAM_CHANNELS: TelegramPublicChannels = [
  ...CEBU_PACIFIC_TELEGRAM_CHANNELS,
];

export const TRAVEL_SUBSCRIPTION_TOPICS: SubscriptionTopics = [
  SubscriptionTopic.FlightsJetstarPh,
  SubscriptionTopic.TravelDealsTripComPh,
  SubscriptionTopic.TravelDealsTravelokaPh,
  SubscriptionTopic.TravelDealsPhilippineAirlines,
];

export const TRAVEL_NOTIFICATION_SETTINGS: NotificationSettings =
  NOTIFICATION_SETTINGS.filter(({ id }) =>
    TRAVEL_SUBSCRIPTION_TOPICS.includes(id),
  );

export const EXAM_RESULTS_TELEGRAM_CHANNELS: TelegramPublicChannels = [];
