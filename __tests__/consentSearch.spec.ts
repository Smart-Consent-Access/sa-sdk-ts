import SmartAccess from "../index";
import { SAAuthTicket } from "@smart-consent-access/sa-typings";

jest.mock("../types/PromiseAPI", () => {
  return {
    PromiseServiceProvidersApi: jest.fn().mockImplementation(() => {}),
    PromiseConsentRequestsApi: jest.fn().mockImplementation(() => {}),
    PromiseConsentsApi: jest.fn().mockImplementation(() => {}),
    PromiseActionTemplatesApi: jest.fn().mockImplementation(() => {}),
  };
});

describe("find", () => {
  let SA = new SmartAccess();
  beforeEach(async () => {
    SA = new SmartAccess();
    await SA.init();
  })

  const ticket: SAAuthTicket = {
    kind: "AUTH_TICKET",
    scope: ["serviceprovider:ticket", "serviceprovider:info"],
    reqServiceProviderId: "string",
    reqPrincipalId: "string",
    consServiceProviderId: "string",
    consPrincipalId: "string",
    actions: [],
    resources: [],
    conditions: [],
    aud: "string",
    iss: "Association Orchestrator",
    iat: 1,
    exp: 1,
  };

  it("should find a condition from a ticket", async () => {
    ticket.conditions = ["telia:smartfamily/DayOfWeek=Tue"];

    const result = await SA.consentSearch.findCondition(ticket, "telia:smartfamily/", "DayOfWeek");

    expect(result).toEqual("Tue");
  });

  it("should find a condition from a ticket with many conditions", async () => {
    ticket.conditions = [
      "telia:smartfamily/DayOfWeek=Tue",
      "telia:smartfamily/StartTime=10:00",
      "telia:smartfamily/EndTime=12:00",
    ];

    const result = await SA.consentSearch.findCondition(ticket, "telia:smartfamily/", "StartTime");

    expect(result).toEqual("10:00");
  });
});
