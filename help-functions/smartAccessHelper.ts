import { SaBaseConfig } from "../main";

export class SmartAccessHelper {
  constructor(private saBaseConfig: SaBaseConfig) {}

  getPublicKey(): string {
    return this.saBaseConfig.saPublicKey;
  }
}
