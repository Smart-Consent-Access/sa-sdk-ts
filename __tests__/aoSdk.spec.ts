import SmartAccess from "../";

const SA = new SmartAccess();  

describe("SC SDK for TypeScript", () => {
  it("can be imported and initialized", async () => {
    try {
      const requestingServiceProvider =
        await SA.serviceProviders.getServiceProvider("sp-id");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
