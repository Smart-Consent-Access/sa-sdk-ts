export interface TicketAuditInput {
  ticket: string;
  serviceProviderId?: string;
  matchAction?: string[];
  matchResource?: string[];
}
