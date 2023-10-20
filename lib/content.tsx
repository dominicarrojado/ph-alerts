import { Fragment } from "react";
import { Anchor } from "@/components/ui/anchor";
import { OWNER_EMAIL } from "./constants";

export const FIXED_DEPOSIT_BANKS = [
  {
    title: "Bank of China",
    url: "https://www.bankofchina.com/sg/bocinfo/bi3/bi31/",
  },
  {
    title: "CIMB",
    url: "https://www.cimb.com.sg/en/personal/banking-with-us/accounts/fixed-deposit/cimb-sgd-fixed-deposit-account.html",
  },
  {
    title: "Citibank",
    url: "https://www.citibank.com.sg/personal-banking/deposits/fixed-deposit-account/promotions/",
  },
  {
    title: "DBS",
    url: "https://www.dbs.com.sg/personal/rates-online/fixed-deposit-rate-singapore-dollar.page",
  },
  {
    title: "Hong Leong Finance",
    url: "https://www.hlf.com.sg/personal/promotions/fixed-deposits-promotion-singapore.php",
  },
  {
    title: "HSBC",
    url: "https://www.hsbc.com.sg/accounts/products/time-deposit/",
  },
  {
    title: "ICBC",
    url: "https://singapore.icbc.com.cn/en/column/1438059017468788838.html",
  },
  {
    title: "Maybank",
    url: "https://www.maybank2u.com.sg/en/promotions/deposits/sgd-time-deposit.page",
  },
  {
    title: "OCBC",
    url: "https://www.ocbc.com/personal-banking/deposits/fixed-deposit-account",
  },
  {
    title: "RHB",
    url: "https://rhbgroup.com.sg/rhb/personal/deposits/fixed-deposit-account",
  },
  {
    title: "Sing Investments & Finance",
    url: "https://www.sif.com.sg/fixed-deposits/",
  },
  {
    title: "Singapore Savings Bonds",
    url: "https://www.mas.gov.sg/bonds-and-bills/singapore-savings-bonds",
  },
  {
    title: "Standard Chartered",
    url: "https://www.sc.com/sg/save/time-deposits/singapore-dollar-time-deposit/",
  },
  {
    title: "UOB",
    url: "https://www.uob.com.sg/personal/save/fixed-deposits/singapore-dollar-fixed-deposit.page",
  },
];

export const NOTIFICATION_SETTINGS = [
  {
    id: "japan-visa",
    title: "🇯🇵 Japan Visa Appointment Slots (Tourism)",
    description: (
      <>
        Receive email notifications when there are new appointment date(s) for{" "}
        <Anchor
          href="https://www.sg.emb-japan.go.jp/itpr_en/visit.html"
          isExternal
        >
          tourist visa application
        </Anchor>{" "}
        at the Embassy of Japan in Singapore. <br />
        <small>(for foreigners who require a visa to visit Japan)</small>
      </>
    ),
  },
  {
    id: "flights-singapore-airlines",
    title: "✈️ Flight Prices (Singapore Airlines)",
    description: (
      <>
        Receive email notifications when the flight prices goes down for{" "}
        <Anchor
          href="https://www.singaporeair.com/en_UK/sg/special-offers/flight-from-Singapore/"
          isExternal
        >
          Singapore Airlines flights
        </Anchor>{" "}
        departing from Singapore.
      </>
    ),
  },
  {
    id: "flights-cebu-pacific",
    title: "✈️ Flight Prices (Cebu Pacific)",
    description: (
      <>
        Receive email notifications when the flight prices goes down for{" "}
        <Anchor
          href="https://www.cebupacificair.com/en-PH/seat-sale"
          isExternal
        >
          Cebu Pacific flights
        </Anchor>{" "}
        departing from the Philippines.
      </>
    ),
  },
  {
    id: "flights-jetstar",
    title: "✈️ Flight Prices (Jetstar)",
    description: (
      <>
        Receive email notifications when the flight prices goes down for{" "}
        <Anchor href="https://www.jetstar.com/sg/en/deals" isExternal>
          Jetstar flights
        </Anchor>{" "}
        departing from Singapore.
      </>
    ),
  },
  {
    id: "deposit-rates",
    title: "💰 Fixed Deposit Rates",
    description: (
      <>
        Receive email notifications when the fixed deposit rates goes up across
        major banks in Singapore. <br />
        <small>
          (
          {FIXED_DEPOSIT_BANKS.map(({ title, url }, index) => (
            <Fragment key={title}>
              {index !== 0 &&
                (index === FIXED_DEPOSIT_BANKS.length - 1 ? " and " : ", ")}
              <Anchor href={url}>{title}</Anchor>
            </Fragment>
          ))}
          )
        </small>
      </>
    ),
  },
  {
    id: "cdc-eyesight-test",
    title: "🚘 CDC Appointment Slots (Eyesight Test)",
    description: (
      <>
        Receive email notifications when there are new appointment date(s) for
        the{" "}
        <Anchor href="https://www.cdc.com.sg/eyesight-test" isExternal>
          eyesight test
        </Anchor>{" "}
        at ComfortDelGro Driving Centre.
      </>
    ),
  },
  {
    id: "cdc-counter-services",
    title: "🚘 CDC Appointment Slots (Counter Services)",
    description: (
      <>
        Receive email notifications when there are new appointment date(s) for{" "}
        <Anchor href="https://www.cdc.com.sg/eappointment" isExternal>
          counter services
        </Anchor>{" "}
        at ComfortDelGro Driving Centre.
      </>
    ),
  },
  {
    id: "movies-gv",
    title: "🎬 Movies with English Subtitles (GV)",
    description: (
      <>
        Receive email notifications when there are new movies with English
        subtitles at{" "}
        <Anchor href="https://www.gv.com.sg/" isExternal>
          Golden Village.
        </Anchor>{" "}
        <br />
        <small>(supported languages: English, Chinese, Korean, Japanese)</small>
      </>
    ),
  },
  {
    id: "movies-shaw",
    title: "🎬 Movies with English Subtitles (Shaw)",
    description: (
      <>
        Receive email notifications when there are new movies with English
        subtitles at{" "}
        <Anchor href="https://shaw.sg/" isExternal>
          Shaw Theatres
        </Anchor>
        . <br />
        <small>(supported languages: English, Chinese, Korean, Japanese)</small>
      </>
    ),
  },
  {
    id: "movies-cathay-cineplexes",
    title: "🎬 Movies with English Subtitles (Cathay Cineplexes)",
    description: (
      <>
        Receive email notifications when there are new movies with English
        subtitles at{" "}
        <Anchor href="https://www.cathaycineplexes.com.sg/" isExternal>
          Cathay Cineplexes
        </Anchor>
        . <br />
        <small>(supported languages: English, Chinese, Korean, Japanese)</small>
      </>
    ),
  },
  {
    id: "movies-the-projector",
    title: "🎬 Movies with English Subtitles (The Projector)",
    description: (
      <>
        Receive email notifications when there are new movies with English
        subtitles at{" "}
        <Anchor href="https://theprojector.sg/">The Projector</Anchor>. <br />
        <small>(supported languages: English, Chinese, Korean, Japanese)</small>
      </>
    ),
  },
  {
    id: "travel-deals-trip.com",
    title: "🌏 Travel Deals (Trip.com)",
    description: (
      <>
        Receive email notifications when there are new travel deals from{" "}
        <Anchor href="https://sg.trip.com/sale/deals" isExternal>
          Trip.com
        </Anchor>
        .
      </>
    ),
  },
  {
    id: "travel-deals-traveloka",
    title: "🌏 Travel Deals (Traveloka)",
    description: (
      <>
        Receive email notifications when there are new travel deals from{" "}
        <Anchor href="https://www.traveloka.com/en-sg/promotion" isExternal>
          Traveloka
        </Anchor>
        .
      </>
    ),
  },
  {
    id: "events-blood-drive",
    title: "🏥 Community Blood Drives",
    description: (
      <>
        Receive email notifications when there are new{" "}
        <Anchor href="https://giveblood.sg/#blood-drive" isExternal>
          community blood drives
        </Anchor>{" "}
        organised by the Singapore Red Cross.
      </>
    ),
  },
  {
    id: "restaurants-burnt-ends",
    title: "🍽️ Table Reservation Slots (Burnt Ends)",
    description: (
      <>
        Receive email notifications when there are new table reservation date(s)
        at{" "}
        <Anchor href="https://burntends.com.sg/reservation/" isExternal>
          Burnt Ends
        </Anchor>
        . <br />
        <small>
          (for main dining area & chefs counter seating - dinner time only)
        </small>
      </>
    ),
  },
  {
    id: "features-sg-alerts",
    title: "🚀 New Features & Alerts",
    description: (
      <>
        Receive email notifications when there are new feature(s) or alert(s) to
        subscribe to at SG Alerts. <br />
        <small>
          Have a suggestion or feedback? Drop me an{" "}
          <Anchor href={`mailto:${OWNER_EMAIL}`} target="_blank">
            email
          </Anchor>
          .
        </small>
      </>
    ),
  },
];