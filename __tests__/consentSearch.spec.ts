import SmartAccess from "../index";
import { SAAuthTicket } from "@smart-consent-access/sa-typings";

const SA = new SmartAccess();

const mockResult = [
  {
    id: "e77632f4-789c-4186-a804-c5b1e4e16079",
    reqServiceProviderId: "1",
    actions: ["telia:smartfamily/CreateDoorlockPin"],
    resources: [
      "telia:smartfamily/RealEstate=*/Building=*/User=123/Family=*/DeviceType=Doorlock/Device=*",
    ],
  },
  {
    id: "e77632f4-789c-4186-a804-c5b1e4e16079",
    reqServiceProviderId: "2",
    actions: ["telia:smartfamily/CreateDoorlockPin"],
    resources: [
      "telia:smartfamily/RealEstate=*/Building=*/User=NoMSISDN/Family=*/DeviceType=Doorlock/Device=*",
    ],
  },
  {
    id: "e77632f4-789c-4186-a804-c5b1e4e16079",
    reqServiceProviderId: "3",
    actions: ["telia:smartfamily/CreateDoorlockPin"],
    resources: [
      "telia:smartfamily/RealEstate=*/Building=*/User=456/Family=*/DeviceType=Doorlock/Device=*",
    ],
  },
  {
    id: "e77632f4-789c-4186-a804-c5b1e4e16079",
    reqServiceProviderId: "3",
    actions: ["telia:smartfamily/CreateDoorlockPin"],
    resources: [
      "telia:smartfamily/RealEstate=*/Building=*/User=456/Family=*/DeviceType=Doorlock/Device=*",
    ],
  },
];

jest.mock("../types/PromiseAPI", () => {
  return {
    PromiseServiceProvidersApi: jest.fn().mockImplementation(() => {}),
    PromiseBackofficeInternalAdminApi: jest.fn().mockImplementation(() => {}),
    PromiseConsentRequestsApi: jest.fn().mockImplementation(() => {
      return {
        getConsentRequests: jest.fn().mockImplementation(() => {
          return mockResult;
        }),
      };
    }),
    PromiseConsentsApi: jest.fn().mockImplementation(() => {}),
  };
});

describe("fetch", () => {
  it("should fetch a request for customer consent a receive a single object", async () => {
    const resourceName = "User";
    const msisdn = "123";
    const expectedResult = [
      {
        id: "e77632f4-789c-4186-a804-c5b1e4e16079",
        reqServiceProviderId: "1",
        actions: ["telia:smartfamily/CreateDoorlockPin"],
        resources: [
          "telia:smartfamily/RealEstate=*/Building=*/User=123/Family=*/DeviceType=Doorlock/Device=*",
        ],
      },
    ];

    const result = await SA.consentSearch.fetchConsentRequestForResource({
      resourceId: msisdn,
      resourceName: resourceName,
    });

    expect(result).toEqual(expectedResult);
  });

  it("should receive nothing if msisdn do not match any", async () => {
    const msisdn = "789";
    const resourceName = "User";

    const result = await SA.consentSearch.fetchConsentRequestForResource({
      resourceId: msisdn,
      resourceName: resourceName,
    });

    expect(result).toEqual([]);
  });

  it("should fetch multiple request for customer consent", async () => {
    const msisdn = "456";
    const resourceName = "User";
    const expectedResult = [
      {
        id: "e77632f4-789c-4186-a804-c5b1e4e16079",
        reqServiceProviderId: "3",
        actions: ["telia:smartfamily/CreateDoorlockPin"],
        resources: [
          "telia:smartfamily/RealEstate=*/Building=*/User=456/Family=*/DeviceType=Doorlock/Device=*",
        ],
      },
      {
        id: "e77632f4-789c-4186-a804-c5b1e4e16079",
        reqServiceProviderId: "3",
        actions: ["telia:smartfamily/CreateDoorlockPin"],
        resources: [
          "telia:smartfamily/RealEstate=*/Building=*/User=456/Family=*/DeviceType=Doorlock/Device=*",
        ],
      },
    ];

    const result = await SA.consentSearch.fetchConsentRequestForResource({
      resourceId: msisdn,
      resourceName: resourceName,
    });

    expect(result).toEqual(expectedResult);
  });
});

describe("find", () => {
  const ticket: SAAuthTicket = {
    kind: "AUTH_TICKET",
    scope: ["serviceprovider:ticket"],
    reqServiceProviderId: "string",
    reqPrincipalId: "string",
    consServiceProviderId: "string",
    consPrincipalId: "string",
    actions: [],
    resources: [],
    conditions: [],
    aud: "string",
    iss: "string",
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
