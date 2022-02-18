import { createPublicKey } from "crypto";
import {
  SAConsReqInitializeSp1ToSaJWT,
  SAConsReqFinalizeSp2ToSaJWT,
  SAConsApprovalInitializeSp2ToSaJWT,
  SAConsApprovalFinalizeSp1ToSaJWT,
  SAConsReqInitializeSaToSp2JWT,
  SAConsReqFinalizeSaToSp1JWT,
  SAConsApprovalInitializeSaToSp1JWT,
  SAConsApprovalFinalizeSaToSp2JWT,
  LocalizedString,
} from "@smart-consent-access/sa-typings";
import { jwtVerify } from "jose";
import * as fs from "fs";
import SmartAccess from "../index";

const SA = new SmartAccess();

const serviceProviderId = process.env.SA_SERVICE_PROVIDER_ID;

jest.useFakeTimers("modern").setSystemTime(new Date("2020-01-01").getTime());
const time: number = 1577836800;

const publicKey = fs
  .readFileSync(
    process.env.SA_SERVICE_PROVIDER_PRIVATE_KEY_PATH ||
      "./config/saPrivateKey.pem"
  )
  .toString();

describe("create and verify urls", () => {
  it("should create a initiate consent request and verify it", async () => {
    const consServiceProviderId = "456";
    const reqPrincipalId = "1";
    const reqPrincipalName = "Johan";
    const actions = [
      "telia:smartfamily/SubscribeCarPosition",
      "telia:smartfamily/SubscribeEVCharging",
    ];
    const resources = [
      `telia:smartfamily/RealEstate=ABC123/Building=1/Family=*/DeviceType=Car/Device=*`,
    ];
    const conditions: string[] = [];
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
    expect(openResult.actions).toEqual(actions);
    expect(openResult.resources).toEqual(resources);
    expect(openResult.conditions).toEqual(conditions);
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
    const actions = [
      "telia:smartfamily/SubscribeCarPosition",
      "telia:smartfamily/SubscribeEVCharging",
    ];
    const resources = [
      `telia:smartfamily/RealEstate=ABC123/Building=1/Family=*/DeviceType=Car/Device=*`,
    ];
    const conditions: string[] = [];
    const expirationTime = "15min";

    const expectedResult =
      "http://localhost:8080/consent_request/finalize?approvalToken=";

    const result = await SA.consentFlows.createConsentRequestFinalization({
      consentRequestId: consentRequestId,
      actions: actions,
      resources: resources,
      conditions: conditions,
      expirationTime: expirationTime,
    });

    const openResult = <SAConsReqFinalizeSp2ToSaJWT>(
      (<any>(await jwtVerify(result.token, createPublicKey(publicKey))).payload)
    );

    expect(result.url).toContain(expectedResult);
    expect(openResult.iss).toEqual(serviceProviderId);
    expect(openResult.consReqId).toEqual(consentRequestId);
    expect(openResult.actions).toEqual(actions);
    expect(openResult.resources).toEqual(resources);
    expect(openResult.conditions).toEqual(conditions);
    expect(openResult.exp).toEqual(time + 60 * 15);
  });

  it("should create a finalize consent request and default to correct values", async () => {
    const consentRequestId = "456";
    const expectedResult =
      "http://localhost:8080/consent_request/finalize?approvalToken=";

    const result = await SA.consentFlows.createConsentRequestFinalization({
      consentRequestId: consentRequestId,
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
    const actions = [
      "telia:smartfamily/SubscribeCarPosition",
      "telia:smartfamily/SubscribeEVCharging",
    ];
    const resources = [
      `telia:smartfamily/RealEstate=ABC123/Building=1/Family=*/DeviceType=Car/Device=*`,
    ];
    const conditions: string[] = [];
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
    expect(openResult.actions).toEqual(actions);
    expect(openResult.resources).toEqual(resources);
    expect(openResult.conditions).toEqual(conditions);
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
  it("should receive a initiate consent request", async () => {
    const expectedResult = {
      iss: "Association Hub",
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
    const ticket = fs.readFileSync("./config/conReqInitTicket.txt", "utf8");

    const result: SAConsReqInitializeSaToSp2JWT =
      await SA.consentFlows.receiveConsentRequestInitialization(ticket);

    expect(result).toEqual(expectedResult);
  });

  it("should receive a finalize consent request", async () => {
    const expectedResult = {
      iss: "Association Hub",
      aud: "test",
      goal: "FINALIZE",
      type: "CONSENT_REQUEST",
      actions: [],
      resources: [],
      conditions: [],
      consServiceProviderId: "123",
      consReqId: "789",
    };
    const ticket = fs.readFileSync("./config/conReqFinTicket.txt", "utf8");

    const result: SAConsReqFinalizeSaToSp1JWT =
      await SA.consentFlows.receiveConsentRequestFinalization(ticket);

    expect(result).toEqual(expectedResult);
  });

  it("should receive a initialize consent approval", async () => {
    const expectedResult = {
      iss: "Association Hub",
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
    const ticket = fs.readFileSync("./config/conAppInitTicket.txt", "utf8");

    const result: SAConsApprovalInitializeSaToSp1JWT =
      await SA.consentFlows.receiveConsentApprovalInitialization(ticket);

    expect(result).toEqual(expectedResult);
  });

  it("should receive a finalize consent approval", async () => {
    const expectedResult = {
      iss: "Association Hub",
      aud: "test",
      goal: "FINALIZE",
      type: "CONSENT_APPROVAL",
      consReqId: "789",
      consId: "123",
    };
    const ticket = fs.readFileSync("./config/conAppFinTicket.txt", "utf8");

    const result: SAConsApprovalFinalizeSaToSp2JWT =
      await SA.consentFlows.receiveConsentApprovalFinalization(ticket);

    expect(result).toEqual(expectedResult);
  });
});
