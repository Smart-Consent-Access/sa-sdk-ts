import { SAAuthTicket } from "@smart-consent-access/sa-typings";
import { jwtVerify } from "jose";
import { createPublicKey } from "crypto";
import { BadRequestError } from "../models/ApiError";
import { ConfigFileInput } from "../types/configFileInput";
import { TicketAuditInput } from "../types/policyEnforcementInput";

export class PolicyEnforcement {
  public constructor(private config: ConfigFileInput) {}
  public async ticketAudit(input: TicketAuditInput): Promise<SAAuthTicket> {
    const authZTicket = <SAAuthTicket>(
      (<any>(
        (await jwtVerify(input.ticket, createPublicKey(this.config.saPublicKey)))
          .payload
      ))
    );

    if (
      input.serviceProviderId &&
      authZTicket.consServiceProviderId !== input.serviceProviderId
    )
      throw new BadRequestError("Token not for me");

    input.matchAction?.forEach((string) => {
      if ((<string[]>authZTicket.actions).indexOf(string) === -1)
        throw new BadRequestError("Not authorized for this action");
    });

    input.matchResource?.forEach((string) => {
      if (
        (<string[]>authZTicket.resources).find(
          (r) => r.indexOf(string) > -1
        ) === undefined
      )
        throw new BadRequestError("Not authorized for this action");
    });

    return authZTicket;
  }
}
