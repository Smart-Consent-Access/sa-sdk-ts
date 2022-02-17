import { ConsentRequestsApi } from "../index";
import { ConfigFileInput } from "../types/configFileInput";
import { ConsentRequest, FetchConsentRequestForResource } from "../types/consentSearchParam";
import { AHAuthTicket } from "@ao/ao-typings";

// TODO: Replace when we have a search endpoint in AO
// Summary: Fetches all SP CR's and filters out the one with resource User=<msisdn>

export class ConsentSearch {
  public constructor(private consentRequestApi: ConsentRequestsApi, private config: ConfigFileInput) {}

  public async fetchConsentRequestForResource(input: FetchConsentRequestForResource): Promise<ConsentRequest[]> {
    const consentRequestsAll: any[] = await this.consentRequestApi.getConsentRequests("by_me");

    // console.log("All", JSON.stringify(consentRequestsAll, null, 2));

    // Pluck out active consent requests with customer msisdn (with and without consents)
    const consentRequestsForCustomer: ConsentRequest[] = consentRequestsAll.filter((cr) =>
      cr.resources.find((r: string) => r.includes(`${input.resourceName}=${input.resourceId}/`) || r.endsWith(`${input.resourceName}=${input.resourceId}`))
    );
    // console.log(
    //   "Some for",
    //   msisdn,
    //   JSON.stringify(consentRequestsForCustomer, null, 2)
    // );

    return consentRequestsForCustomer;
  }

  public async findCondition(ticket: AHAuthTicket, key: string, condition: string): Promise<string> {
    const conditions = ticket.conditions
      .map((c) => c.split(key)[1].split("="))
      .reduce((memo, cond) => {
        memo[cond[0]] = cond[1];
        return memo;
      }, {} as Record<string, string>);

    return conditions[condition];
  }
}
