const { display } = require("../src/display");

describe("display", () => {
  it("should return undefined", () => {
    expect(display()).toEqual(undefined);
  });
});
