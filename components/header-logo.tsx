"use client";

import Link from "next/link";
import React from "react";
import { Routes } from "@/lib/enums";
import { cn } from "@/lib/utils";

type Props = {
  pathname: string;
  flagClassName?: string;
};

export default function HeaderLogo({ pathname, flagClassName }: Props) {
  const children = (
    <>
      <span className={cn("mr-2 md:mr-4", flagClassName)}>🇵🇭</span>
      <span className="group-hover:underline">
        <abbr title="Philippines" className="no-underline">
          PH
        </abbr>{" "}
        Alerts
      </span>
    </>
  );

  return pathname === Routes.Home ? (
    children
  ) : (
    <Link href={Routes.Home} className="group">
      {children}
    </Link>
  );
}
