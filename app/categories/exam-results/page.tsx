import { Metadata } from "next";
import React from "react";
import { Container } from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import SubscribeForm from "@/app/subscribe-form";
import { Routes } from "@/lib/enums";
import { META_OPEN_GRAPH, META_TWITTER } from "@/app/shared-metadata";
import { EXAM_RESULTS_NOTIFICATION_SETTINGS } from "@/lib/content";

const title = "Exam Results in the Philippines";
const description =
  "Subscribe to get notified about exam results in the Philippines such as PRC licensure exam results.";
const url = Routes.ExamResultsCategory;

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

export default function ExamResults() {
  return (
    <>
      <Container>
        <div className="mb-6 space-y-2">
          <Heading>{title}</Heading>
          <Subheading>{description}</Subheading>
        </div>
        <SubscribeForm
          defaultTopics={EXAM_RESULTS_NOTIFICATION_SETTINGS}
          backButtonRoute={Routes.Home}
        />
      </Container>
    </>
  );
}
