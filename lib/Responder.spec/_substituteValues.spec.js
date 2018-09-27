const { _substituteValues } = require("../Responder.js").test;

describe("_substituteValues", () => {
  const store = {
    price: "23 sats",
    unrelated: "a test"
  };

  it("should substitue values in", () => {
    const response = { text: "price is {price}, unrelated is {unrelated}" };

    const result = _substituteValues(response, store);

    expect(result.text).toBe("price is 23 sats, unrelated is a test");
  });

  it("should provide the original response if there is nothing to substitute", () => {
    const response = { text: "nothing to replace", r: "🔥" };

    const result = _substituteValues(response, store);

    expect(result.text).toBe("nothing to replace");
  });

  it("should provide the original response if there is no text", () => {
    const response = { response: "🛡" };

    const result = _substituteValues(response, store);

    expect(result.response).toBe("🛡");
  });
});
