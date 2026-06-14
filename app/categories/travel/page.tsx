import { Metadata } from "next";
import React from "react";
import { Container } from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import TelegramChannels from "@/components/telegram-channels";
import PageSeparator from "@/components/page-separator";
import SubscribeForm from "@/app/subscribe-form";
import { Routes } from "@/lib/enums";
import { META_OPEN_GRAPH, META_TWITTER } from "@/app/shared-metadata";
import {
  TRAVEL_NOTIFICATION_SETTINGS,
  TRAVEL_TELEGRAM_CHANNELS,
} from "@/lib/content";

const title = "Travel in Philippines";
const description =
  "Subscribe to get notified on topics related to travel in Philippines such as flight prices and travel deals.";
const url = Routes.TravelCategory;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    ...META_OPEN_GRAPH,
    title,
    description,
    url,
  },
  twitter: {
    ...META_TWITTER,
    title,
    description,
  },
};

export default function Travel() {
  return (
    <>
      <Container>
        <div className="mb-6 space-y-2">
          <Heading>{title}</Heading>
          <Subheading>{description}</Subheading>
        </div>
        <TelegramChannels channels={TRAVEL_TELEGRAM_CHANNELS} />
        <PageSeparator>OR</PageSeparator>
        <SubscribeForm
          defaultTopics={TRAVEL_NOTIFICATION_SETTINGS}
          backButtonRoute={Routes.Home}
        />
      </Container>
    </>
  );
}
