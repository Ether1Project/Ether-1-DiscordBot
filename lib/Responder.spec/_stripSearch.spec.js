const { _stripSearch } = require("../Responder.js").test;

describe("_stripSearch", () => {
  it("strips properly", () => {
    const search = "!when      coin            ";
    const prefixes = ["!", "when"];

    const result = _stripSearch(search, prefixes);

    expect(result).toBe("coin");
  });

  it("only strips once", () => {
    const search = "!when      coin    when        ";
    const prefixes = ["!", "when"];

    const result = _stripSearch(search, prefixes);

    expect(result).toBe("coin when");
  });
});
