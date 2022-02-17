import * as fs from "fs";
import SmartAccess from "../index";
import { AHAuthTicket } from "@ao/ao-typings";

const SA = new SmartAccess();

const ticket = fs.readFileSync("./config/policyTicket.txt", "utf8");

describe("Audit ticket", () => {
  it("should verify a ticket and return it", async () => {
    const expectedResult = {
      requestingApplication: "404c75fd-ca02-4416-80a7-8eb2fca73b5c",
      consentingApplication: "080f264e-99f6-49d3-938c-b8c2d93bf179",
      consServiceProviderId: "080f264e-99f6-49d3-938c-b8c2d93bf179",
      principalId: "ciam/abc-123",
      actions: [
        "telia:smartfamily/SubscribeFireAlarms",
        "telia:smartfamily/SubscribeMoistureAlarms",
      ],
      resources: [
        "telia:smartfamily/Country=Sweden/City=Sundsvall/Building=*/DeviceTypes=FireAlarms/Devices=*",
      ],
      conditions: [
        "telia:smartfamily/DayOfWeek=Tue",
        "telia:smartfamily/StartTime=10:00",
        "telia:smartfamily/EndTime=12:00",
      ],
      iat: 1633348054,
      iss: "Association Orchestrator",
    };

    const result: AHAuthTicket = await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
    });

    expect(result).toEqual(expectedResult);
  });

  it("should not verify a faulty ticket", async () => {
    try {
      await SA.policyEnforcement.ticketAudit({ ticket: ticket + "extra" });
    } catch (error) {
      expect((error as Error).message).toEqual("signature verification failed");
    }
  });

  it("should verify a service provider ID", async () => {
    const serviceProviderId = "080f264e-99f6-49d3-938c-b8c2d93bf179";

    await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
      serviceProviderId: serviceProviderId,
    });
  });

  it("should not verify a faulty ID", async () => {
    const serviceProviderId = "080";

    try {
      await SA.policyEnforcement.ticketAudit({
        ticket: ticket,
        serviceProviderId: serviceProviderId,
      });
    } catch (error) {
      expect((error as Error).message).toEqual("Token not for me");
    }
  });

  it("should verify a action", async () => {
    const action = ["telia:smartfamily/SubscribeFireAlarms"];

    await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
      matchAction: action,
    });
  });

  it("should verify multiple actions", async () => {
    const action = [
      "telia:smartfamily/SubscribeFireAlarms",
      "telia:smartfamily/SubscribeMoistureAlarms",
    ];

    await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
      matchAction: action,
    });
  });

  it("should not verify a faulty action", async () => {
    const action = ["telia:NoAction"];

    try {
      await SA.policyEnforcement.ticketAudit({
        ticket: ticket,
        matchAction: action,
      });
    } catch (error) {
      expect((error as Error).message).toEqual(
        "Not authorized for this action"
      );
    }
  });

  it("should not verify if there is a faulty action among other correct actions", async () => {
    const action = ["telia:smartfamily/SubscribeFireAlarms", "telia:NoAction"];

    try {
      await SA.policyEnforcement.ticketAudit({
        ticket: ticket,
        matchAction: action,
      });
    } catch (error) {
      expect((error as Error).message).toEqual(
        "Not authorized for this action"
      );
    }
  });

  it("should verify a resource", async () => {
    const resource = ["Country=Sweden"];

    await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
      matchResource: resource,
    });
  });

  it("should verify multiple resources", async () => {
    const resource = ["Country=Sweden", "City=Sundsvall"];

    await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
      matchResource: resource,
    });
  });

  it("should not verify a faulty resource", async () => {
    const resource = ["Country=NotACountry"];

    try {
      await SA.policyEnforcement.ticketAudit({
        ticket: ticket,
        matchResource: resource,
      });
    } catch (error) {
      expect((error as Error).message).toEqual(
        "Not authorized for this action"
      );
    }
  });

  it("should not verify if there is a faulty resource among other correct resources", async () => {
    const resource = ["Country=Sweden", "Country=NotACountry"];

    try {
      await SA.policyEnforcement.ticketAudit({
        ticket: ticket,
        matchResource: resource,
      });
    } catch (error) {
      expect((error as Error).message).toEqual(
        "Not authorized for this action"
      );
    }
  });
});
