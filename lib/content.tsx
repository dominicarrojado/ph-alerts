import { Fragment } from "react";
import { Anchor } from "@/components/ui/anchor";
import { NotificationSettings } from "./types";
import { Routes, SubscriptionTopic } from "./enums";
import { OWNER_EMAIL } from "./constants";
import Link from "next/link";

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
    title: "Jetstar Flights",
    href: Routes.JetstarFlights,
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
        <Link href={Routes.CebuPacificFlights} passHref legacyBehavior>
          <Anchor>Cebu Pacific flights</Anchor>
        </Link>{" "}
        departing from the Philippines.
      </>
    ),
  },
  {
    id: SubscriptionTopic.FlightsJetstarPh,
    title: "✈️ Flight Prices (Jetstar)",
    description: (
      <>
        Receive email notifications when the flight prices goes down for{" "}
        <Link href={Routes.JetstarFlights} passHref legacyBehavior>
          <Anchor>Jetstar flights</Anchor>
        </Link>{" "}
        departing from the Philippines.
      </>
    ),
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
