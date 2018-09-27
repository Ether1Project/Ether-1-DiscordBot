const { _substituteValues } = require("../Responder.js").test;

describe("_substituteValues", () => {
  const store = {
    price: "23 sats",
    unrelated: "a test"
  };

  it("should substitue values in", () => {
    const response = "price is {price}, unrelated is {unrelated}";

    const result = _substituteValues(response, store);

    expect(result).toBe("price is 23 sats, unrelated is a test");
  });

  it("should provide the original response if there is nothing to substitute", () => {
    const response = "nothing to replace";

    const result = _substituteValues(response, store);

    expect(result).toBe("nothing to replace");
  });
});
