import { Metadata } from "next";
import React from "react";
import { Container } from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Paragraph from "@/components/ui/paragraph";
import TelegramLinkButton from "@/components/telegram-link-button";
import {
  Currency,
  FlightAirline,
  Routes,
  TelegramChannel,
  TopicTitle,
} from "@/lib/enums";
import { META_OPEN_GRAPH, META_TWITTER } from "@/app/shared-metadata";
import { FlightsTable } from "@/components/flights-table";
import { Anchor } from "@/components/ui/anchor";

const title = "Cebu Pacific Flights";
const description =
  "Subscribe to PH Alerts to get notified when there's Piso Sale for Cebu Pacific flights departing from the Philippines.";

const url = Routes.CebuPacificFlights;

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

export default function CebuPacificFlights() {
  return (
    <Container>
      <div className="space-y-2">
        <Heading>{title}</Heading>
        <Subheading>{description}</Subheading>
      </div>
      <FlightsTable
        airline={FlightAirline.CEBU_PACIFIC}
        destinationLabel="Route"
        displayCityCode={false}
        pricesLabel="Base Fare"
        currency={Currency.PHP}
        usePercentDiff={false}
      />
      <Paragraph>
        <span className="font-medium">Cebu Pacific (5J)</span> is the one of the
        leading airlines in the Philippines, flying to over 60 domestic and
        international destinations across 14 countries, including Australia,
        China, Japan, Singapore and the United Arab Emirates.
      </Paragraph>
      <Paragraph>
        <Anchor
          href="https://www.cebupacificair.com/en-PH/seat-sale"
          isExternal
        >
          Fare deals offered by Cebu Pacific
        </Anchor>{" "}
        are highly sought after by Filipinos. One of the most popular promotions
        is the Piso Sale, where you can book flights with base fares as low as 1
        peso.
      </Paragraph>
      <Paragraph>
        <span className="font-medium">PH Alerts</span> is a free notification
        service that monitors the Cebu Pacific flight promotions from the
        Philippines. We will notify you when the prices go down so that you can
        take advantage of the lower prices.
      </Paragraph>
      <Paragraph>
        To get started, simply click the button below to join the Telegram
        channel and start receiving notifications.
      </Paragraph>
      <div className="sticky bottom-6 z-50 mt-8 text-center">
        <TelegramLinkButton
          channel={TelegramChannel.CebuPacificFlights}
          linkText="Subscribe Now"
          topicTitle={TopicTitle.CebuPacificFlights}
        />
      </div>
    </Container>
  );
}
