import { createPrivateKey, createPublicKey } from "crypto";
import {
  SAConsReqInitializeSp1ToSaJWT,
  SAConsReqFinalizeSp2ToSaJWT,
  SAConsApprovalInitializeSp2ToSaJWT,
  SAConsApprovalFinalizeSp1ToSaJWT,
  SAConsApprovalFinalizeSaToSp2JWT,
  LocalizedString,
  ReceivedSAConsReqInitialization,
  ReceivedSAConsReqFinalization,
  ReceivedSAConsInitialization,
  SAConsReqInitializeSaToSp2JWT,
} from "@smart-consent-access/sa-typings";
import { jwtVerify, SignJWT } from "jose";
import * as fs from "fs";
import SmartAccess from "../index";

const serviceProviderId = process.env.SA_SERVICE_PROVIDER_ID;

jest.useFakeTimers("modern").setSystemTime(new Date("2020-01-01").getTime());
const time: number = 1577836800;

const publicKey = fs
  .readFileSync(
    process.env.SA_SERVICE_PROVIDER_PRIVATE_KEY_PATH ||
      "./config/saPrivateKey.pem"
  )
  .toString();

const saPrivateKey = fs.readFileSync(`../../../ah-api/certs/private.key.pem` || "", "utf8");

const actions = [
  {
    tenant: "org",
    system: "sp",
    actionName: "SubscribeCarPosition",
  },
  {
    tenant: "org",
    system: "sp",
    actionName: "SubscribeEVCharging",
  },
];

const resources = [
  {
    tenant: "org",
    system: "sp",
    resourceTags: [
      {
        key: "RealEstate",
        value: "ABC123",
      },
      {
        key: "Building",
        value: "1",
      },
      {
        key: "Family",
        value: "*",
      },
      {
        key: "DeviceType",
        value: "Car",
      },
      {
        key: "Device",
        value: "*",
      },
    ],
  },
];

const conditions: [] = [];

async function signJwt(payload: any) {
  const ticket = await new SignJWT(payload)
    .setProtectedHeader({ alg: "RS256" })
    .setIssuer("Association Orchestrator")
    .sign(createPrivateKey(saPrivateKey));
  
  return ticket;
}

describe("create and verify urls", () => {
  
  let SA = new SmartAccess();
  beforeEach(async () => {
    SA = new SmartAccess();
    await SA.init();
  })

  it("should create a initiate consent request and verify it", async () => {
    const consServiceProviderId = "456";
    const reqPrincipalId = "1";
    const reqPrincipalName = "Johan";

    const expirationTime = "15min";

    const expectedResult =
      "http://localhost:8080/consent_request/initialize?reqToken=";

    const purpose: LocalizedString[] = [
      {
        locale: "sv_SE",
        format: "markdown",
        value:
          "Hej! Vår städpersonal behöver komma in i din lägenhet för din bokade veckostädning. Hör gärna av dig till mig om du har frågor på [08-123 45 67](tel:+4681234567). mvh Peter",
      },
      {
        locale: "en_US",
        value:
          "Hello! Our cleaning personnel needs access to your apartement for your weekly cleaning. Please contact me if you have any questions on [08-123 45 67](tel:+4681234567). Regards Peter"
      }
    ];

    const result = await SA.consentFlows.createConsentRequestInitialization({
      consentServiceProviderId: consServiceProviderId,
      requestPrincipalId: reqPrincipalId,
      requestPrincipalName: reqPrincipalName,
      actions: actions,
      resources: resources,
      conditions: conditions,
      expirationTime: expirationTime,
      termsAndConditions: "https://www.google.com/",
      purpose: purpose
    });

    const openResult = <SAConsReqInitializeSp1ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.reqServiceProviderId).toEqual(serviceProviderId);
    expect(openResult.consServiceProviderId).toEqual(consServiceProviderId);
    expect(openResult.reqPrincipalId).toEqual(reqPrincipalId);
    expect(openResult.reqPrincipalName).toEqual(reqPrincipalName);
    expect(SA.consentFlows.getActionStringFormat(openResult.actions)).toEqual(actions);
    expect(SA.consentFlows.getResourceStringFormat(openResult.resources)).toEqual(resources);
    expect(SA.consentFlows.getConditionStringFormat(openResult.conditions)).toEqual(conditions);
    expect(openResult.exp).toEqual(time + 60 * 15);
  });

  it("should create a initiate consent request and default to correct values", async () => {
    const consServiceProviderId = "456";

    const expectedResult =
      "http://localhost:8080/consent_request/initialize?reqToken=";

    const result = await SA.consentFlows.createConsentRequestInitialization({
      consentServiceProviderId: consServiceProviderId
    });

    const openResult = <SAConsReqInitializeSp1ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.exp).toEqual(time + 60 * 10);
    expect(openResult.actions).toEqual([]);
    expect(openResult.resources).toEqual([]);
    expect(openResult.conditions).toEqual([]);
  });

  it("should create a finalize consent request and verify it", async () => {
    const consentRequestId = "456";
    const expirationTime = "15min";

    const expectedResult =
      "http://localhost:8080/consent_request/finalize?approvalToken=";

    const result = await SA.consentFlows.createConsentRequestFinalization({
      consentRequestId: consentRequestId,
      actions: actions,
      resources: resources,
      conditions: conditions,
      expirationTime: expirationTime,
      numAffectedUsers: 1,
    });

    const openResult = <SAConsReqFinalizeSp2ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.iss).toEqual(serviceProviderId);
    expect(openResult.consReqId).toEqual(consentRequestId);
    expect(SA.consentFlows.getActionStringFormat(openResult.actions)).toEqual(actions);
    expect(SA.consentFlows.getResourceStringFormat(openResult.resources)).toEqual(resources);
    expect(SA.consentFlows.getConditionStringFormat(openResult.conditions)).toEqual(conditions);
    expect(openResult.exp).toEqual(time + 60 * 15);
  });

  it("should create a finalize consent request and default to correct values", async () => {
    const consentRequestId = "456";
    const expectedResult =
      "http://localhost:8080/consent_request/finalize?approvalToken=";

    const result = await SA.consentFlows.createConsentRequestFinalization({
      consentRequestId: consentRequestId,
      numAffectedUsers: 1,
    });

    const openResult = <SAConsReqFinalizeSp2ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.exp).toEqual(time + 60 * 10);
    expect(openResult.actions).toEqual([]);
    expect(openResult.resources).toEqual([]);
    expect(openResult.conditions).toEqual([]);
  });

  it("should create a initiate consent approval and verify it", async () => {
    const consentRequestId = "456";
    const conPrincipalId = "1";
    const conPrincipalName = "Johan";
    const expirationTime = "15min";

    const expectedResult =
      "http://localhost:8080/consent_approval/initialize?approvalToken=";

    const result = await SA.consentFlows.createConsentApprovalInitialization({
      consentRequestId: consentRequestId,
      consentPrincipalId: conPrincipalId,
      consentPrincipalName: conPrincipalName,
      actions: actions,
      resources: resources,
      conditions: conditions,
      expirationTime: expirationTime,
    });

    const openResult = <SAConsApprovalInitializeSp2ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.consReqId).toEqual(consentRequestId);
    expect(openResult.consPrincipalId).toEqual(conPrincipalId);
    expect(openResult.consPrincipalName).toEqual(conPrincipalName);
    expect(SA.consentFlows.getActionStringFormat(openResult.actions)).toEqual(actions);
    expect(SA.consentFlows.getResourceStringFormat(openResult.resources)).toEqual(resources);
    expect(SA.consentFlows.getConditionStringFormat(openResult.conditions)).toEqual(conditions);
    expect(openResult.exp).toEqual(time + 60 * 15);
  });

  it("should create a initiate consent approval and default to correct values", async () => {
    const consentRequestId = "456";

    const expectedResult =
      "http://localhost:8080/consent_approval/initialize?approvalToken=";

    const result = await SA.consentFlows.createConsentApprovalInitialization({
      consentRequestId: consentRequestId,
    });

    const openResult = <SAConsApprovalInitializeSp2ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.exp).toEqual(time + 60 * 10);
    expect(openResult.actions).toEqual([]);
    expect(openResult.resources).toEqual([]);
    expect(openResult.conditions).toEqual([]);
  });

  it("should create a finalize consent approval and verify it", async () => {
    const consentRequestId = "456";
    const consentId = "789";
    const expirationTime = "15min";

    const expectedResult = "http://localhost:8080/request_consent?reqToken=";

    const result = await SA.consentFlows.createConsentApprovalFinalization({
      consentRequestId: consentRequestId,
      consentId: consentId,
      expirationTime: expirationTime,
    });

    const openResult = <SAConsApprovalFinalizeSp1ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.iss).toEqual(serviceProviderId);
    expect(openResult.consReqId).toEqual(consentRequestId);
    expect(openResult.consId).toEqual(consentId);
    expect(openResult.exp).toEqual(time + 60 * 15);
  });

  it("should create a finalize consent approval and default to correct values", async () => {
    const consentRequestId = "456";
    const consentId = "789";
    const expectedResult = "http://localhost:8080/request_consent?reqToken=";

    const result = await SA.consentFlows.createConsentApprovalFinalization({
      consentRequestId: consentRequestId,
      consentId: consentId,
    });

    const openResult = <SAConsApprovalFinalizeSp1ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.exp).toEqual(time + 60 * 10);
  });
});

describe("open and return consent payloads", () => {
  let SA = new SmartAccess();
  beforeEach(async () => {
    SA = new SmartAccess();
    await SA.init();
  })
  
  it("should receive a initiate consent request", async () => {
    const expectedResult = {
      iss: "Association Orchestrator",
      aud: "test",
      goal: "INITIATE",
      type: "CONSENT_REQUEST",
      reqServiceProviderId: "123",
      reqPrincipalName: "test",
      reqPrincipalId: "456",
      actions: ["telia:smartfamily/SubscribeFireAlarms"],
      resources: [
        "telia:smartfamily/Country=Sweden/City=Sundsvall/Building=*/DeviceTypes=FireAlarms/Devices=*",
      ],
      conditions: ["telia:smartfamily/DayOfWeek=Tue"],
      consReqId: "789",
      reqServiceProviderName: "test",
    };
    const ticket = await signJwt(expectedResult);

    const result: ReceivedSAConsReqInitialization =
      await SA.consentFlows.receiveConsentRequestInitialization(ticket);

    expect(result.ticket).toEqual(expectedResult);
  });

  it("should receive a finalize consent request", async () => {
    const expectedResult = {
      iss: "Association Orchestrator",
      aud: "test",
      goal: "FINALIZE",
      type: "CONSENT_REQUEST",
      actions: [],
      resources: [],
      conditions: [],
      consServiceProviderId: "123",
      consReqId: "789",
    };
    const ticket = await signJwt(expectedResult);

    const result: ReceivedSAConsReqFinalization =
      await SA.consentFlows.receiveConsentRequestFinalization(ticket);

    expect(result.ticket).toEqual(expectedResult);
  });

  it("should receive a initialize consent approval", async () => {
    const expectedResult = {
      iss: "Association Orchestrator",
      aud: "test",
      goal: "INITIATE",
      type: "CONSENT_APPROVAL",
      actions: [],
      resources: [],
      conditions: [],
      consServiceProviderId: "123",
      consReqId: "789",
      consPrincipalName: "test",
      consPrincipalId: "456",
      consId: "147",
      consServiceProviderName: "test",
    };
    const ticket = await signJwt(expectedResult);

    const result: ReceivedSAConsInitialization =
      await SA.consentFlows.receiveConsentApprovalInitialization(ticket);

    expect(result.ticket).toEqual(expectedResult);
  });

  it("should receive a finalize consent approval", async () => {
    const expectedResult = {
      iss: "Association Orchestrator",
      aud: "test",
      goal: "FINALIZE",
      type: "CONSENT_APPROVAL",
      consReqId: "789",
      consId: "123",
    };
    const ticket = await signJwt(expectedResult);

    const result: SAConsApprovalFinalizeSaToSp2JWT =
      await SA.consentFlows.receiveConsentApprovalFinalization(ticket);

    expect(result).toEqual(expectedResult);
  });
});

describe("Properly encode and decode conditions and resources", () => {
  let SA = new SmartAccess();
  beforeEach(async () => {
    SA = new SmartAccess();
    await SA.init();
  })

  it("Encode and decode conditions", async () => {
    const conditions = [
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "FirstCondition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "Second+Condition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "Third/Condition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "Fourth=Condition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "Fifth:Condition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "Sixth%Condition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "Seventh;Condition",
        }
      },
      {
        tenant: "org",
        system: "sp",
        expression: {
          key: "key",
          value: "-_.!~*'()",
        }
      },
    ];
    const expectedResult = [
      "org:sp/key=FirstCondition",
      "org:sp/key=Second%2BCondition",
      "org:sp/key=Third%2FCondition",
      "org:sp/key=Fourth%3DCondition",
      "org:sp/key=Fifth%3ACondition",
      "org:sp/key=Sixth%25Condition",
      "org:sp/key=Seventh%3BCondition",
      "org:sp/key=-_.!~*'()",
    ];

    const result = await SA.consentFlows.createConsentRequestInitialization({
      consentServiceProviderId: "",
      conditions: conditions,
    });

    const openResult = <SAConsReqInitializeSaToSp2JWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    // Check encoding
    expect(openResult.conditions).toEqual(expectedResult);
    // Check decoding
    expect(SA.consentFlows.getConditionStringFormat(openResult.conditions)).toEqual(conditions);
  });

  it("Encode and decode resources", async () => {
    const resources = [
      {
        tenant: "org",
        system: "sp",
        resourceTags: [
          {
            key: "Key",
            value: "FirstValue",
          },
          {
            key: "Key",
            value: "Second+Value",
          },
          {
            key: "Key",
            value: "Third/Value",
          },
          {
            key: "Key",
            value: "Fourth=Value",
          },
          {
            key: "Key",
            value: "Fifth:Value",
          },
          {
            key: "Key",
            value: "Sixth%Value",
          },
        ],
      },
    ];
    const expectedResult = [
      "org:sp/Key=FirstValue/Key=Second%2BValue/Key=Third%2FValue/Key=Fourth%3DValue/Key=Fifth%3AValue/Key=Sixth%25Value",
    ];

    const result = await SA.consentFlows.createConsentRequestInitialization({
      consentServiceProviderId: "",
      resources: resources,
    });

    const openResult = <SAConsReqInitializeSaToSp2JWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    // Check encoding
    expect(openResult.resources).toEqual(expectedResult);
    // Check decoding
    expect(SA.consentFlows.getResourceStringFormat(openResult.resources)).toEqual(resources);
  });
});
