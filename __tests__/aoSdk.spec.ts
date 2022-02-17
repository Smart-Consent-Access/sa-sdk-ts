import SmartAccess from "../";

const SC = new SmartAccess();  

describe("SC SDK for TypeScript", () => {
  it("can be imported and initialized", async () => {
    try {
      const requestingServiceProvider =
        await SC.serviceProviders.getServiceProvider("sp-id");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
