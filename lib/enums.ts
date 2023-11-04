export enum Routes {
  Home = "/",
  Subscribe = "/subscribe/",
  Settings = "/settings/",
  About = "/about/",
  HowItWorks = "/how-it-works/",
  CebuPacificFlights = "/topics/cebu-pacific-flights/",
  JetstarFlights = "/topics/jetstar-flights/",
}

export enum FetchStatus {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
  NotFound = "not-found",
  Failure = "failure",
}

export enum ApiEndpoint {
  SubscriptionRequests = "/subscription-requests",
  SubscriptionRequestVerify = "/subscription-requests/:id/verify",
  SubscriptionLinkEmail = "/subscriptions/link-email",
  SubscriptionTopics = "/subscriptions/:id/topics",
  JapanVisaLastSlotsInfo = "/japan-visa-checker/last-available-slots-info",
  FixedDepositRatesInfo = "/deposit-rates-checker/deposit-rates-info",
  FlightsInfo = "/flight-checker/flights-info",
  CoeBiddingsInfo = "/coe-checker/biddings-info",
}

export enum SubscriptionTopic {
  FlightsCebuPacific = "flights-cebu-pacific",
  FlightsJetstarPh = "flights-jetstar-ph",
  TravelDealsTripComPh = "travel-deals-trip.com-ph",
  TravelDealsTravelokaPh = "travel-deals-traveloka-ph",
  TravelDealsPhilippineAirlines = "travel-deals-philippine-airlines",
  FeaturesPhAlerts = "features-ph-alerts",
}

export enum GoogleAnalyticsEvent {
  SUBSCRIBE_FORM_SUBMIT = "subscribe_form_submit",
  UNSUBSCRIBE_FORM_SUBMIT = "unsubscribe_form_submit",
}

export enum FlightAirline {
  CEBU_PACIFIC = "cebu-pacific",
  JETSTAR = "jetstar-ph",
}

export enum Currency {
  SGD = "SGD",
  PHP = "PHP",
}
