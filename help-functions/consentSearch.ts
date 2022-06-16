import { SAAuthTicket } from "@smart-consent-access/sa-typings";

export class ConsentSearch {
  public constructor() {}

  public async findCondition(ticket: SAAuthTicket, key: string, condition: string): Promise<string> {
    const conditions = ticket.conditions
      .map((c) => c.split(key)[1].split("="))
      .reduce((memo, cond) => {
        memo[cond[0]] = cond[1];
        return memo;
      }, {} as Record<string, string>);

    return conditions[condition];
  }
}
