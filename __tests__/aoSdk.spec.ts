import SmartAccess from "../";

const SA = new SmartAccess();  

describe("SC SDK for TypeScript", () => {
  it("can be imported and initialized", async () => {
    await expect(SA.init()).resolves;
  });
});
