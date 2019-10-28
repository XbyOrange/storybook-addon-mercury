const index = require("../src/index");

describe("index", () => {
  it("should export the display method", () => {
    expect(index.display).toBeDefined();
  });
});
