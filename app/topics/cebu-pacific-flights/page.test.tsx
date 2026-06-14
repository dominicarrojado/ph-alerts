import Page from "./page";

describe("CebuPacificFlights", () => {
  it.only("renders without throwing", async () => {
    expect(() => <Page />).not.toThrow();
  });
});
