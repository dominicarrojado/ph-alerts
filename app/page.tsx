import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CATEGORY_ITEMS } from "@/lib/content";
import { OWNER_EMAIL } from "@/lib/constants";

export default function Home() {
  return (
    <Container className="space-y-4 pt-0 sm:space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Join the Community! 🚀</CardTitle>
          <CardDescription>
            Select a category that you would like to receive notifications for.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 pb-4 sm:grid-cols-3 sm:gap-6">
            {CATEGORY_ITEMS.map(({ emoji, title, description, href }) => (
              <Button
                key={title}
                variant="outline"
                className="h-auto bg-transparent p-4"
                asChild
              >
                <Link href={href}>
                  <div className="flex flex-col py-2 text-center">
                    <div className="text-3xl sm:text-4xl">{emoji}</div>
                    <div className="mt-2 font-medium">{title}</div>
                    <div className="mt-1 text-xs font-light text-muted-foreground">
                      {description}
                    </div>
                  </div>
                </Link>
              </Button>
            ))}
            <Button variant="ghost" className="h-auto p-4" asChild>
              <a href={`mailto:${OWNER_EMAIL}`}>
                <div className="flex flex-col py-2 text-center">
                  <div className="text-3xl sm:text-4xl">💡</div>
                  <div className="mt-2 font-medium">
                    New Topic? <br />
                  </div>
                  <div className="mt-1 text-xs font-light text-muted-foreground">
                    Send an email
                  </div>
                </div>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
