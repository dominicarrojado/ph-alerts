import React from "react";
import { Container } from "./ui/container";
import { ModeToggle } from "./mode-toggle";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./page-header";
import HeaderLogo from "./headerLogo";

export default function Header() {
  return (
    <Container className="pb-0">
      <div className="flex items-start justify-between">
        <PageHeader>
          <PageHeaderHeading className="space-y-2">
            <HeaderLogo />
          </PageHeaderHeading>
          <PageHeaderDescription>
            Subscribe to all things Singapore. <br />
            Save time. Stay updated.
          </PageHeaderDescription>
        </PageHeader>
        <div className="shrink-0">
          <ModeToggle />
        </div>
      </div>
    </Container>
  );
}