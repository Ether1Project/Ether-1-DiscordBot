const { _substituteValues } = require("../Responder.js").test;

describe("_substituteValues", () => {
  const response = "price is {price}, unrelated is {unrelated}";

  const store = {
    price: "23 sats",
    unrelated: "a test"
  };

  it("should substitue values in", () => {
    const result = _substituteValues(response, store);

    expect(result).toBe("price is 23 sats, unrelated is a test");
  });
});
