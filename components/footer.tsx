import React from "react";
import Balancer from "react-wrap-balancer";
import {
  OWNER_DONATION_LINK,
  OWNER_NAME,
  OWNER_WEBSITE,
} from "@/lib/constants";
import { Container } from "./ui/container";
import { Anchor } from "./ui/anchor";

export default function Footer() {
  return (
    <Container className="pt-0">
      <Balancer className="text-center text-sm leading-loose text-muted-foreground">
        Like the service? Please consider{" "}
        <Anchor href={OWNER_DONATION_LINK} isExternal>
          donating
        </Anchor>{" "}
        to support this free notification service. Every donation is sincerely
        appreciated! 🙏
      </Balancer>
      <p className="mt-4 text-center text-sm leading-loose text-muted-foreground">
        Built by{" "}
        <Anchor href={OWNER_WEBSITE} target="_blank">
          {OWNER_NAME}
        </Anchor>
      </p>
    </Container>
  );
}