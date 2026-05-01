import { Anchor } from "@/components/ui/anchor";
import { NotificationSettings } from "./types";
import { Routes, SubscriptionTopic } from "./enums";
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
