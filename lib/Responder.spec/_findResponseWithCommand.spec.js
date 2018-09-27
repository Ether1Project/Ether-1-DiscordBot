const { _findResponseWithCommand } = require("../Responder.js").test;

describe("_findResponseWithCommand", () => {
  const commands = {
    price: { text: "price_response" },
    height: { text: "height_response", reaction: "🔥" }
  };

  it("should find an exact command", () => {
    const search = "price";

    const response = _findResponseWithCommand(search, commands);

    expect(response.text).toBe("price_response");
  });

  it("should find a command with a missing letter", () => {
    const search = "prce";

    const response = _findResponseWithCommand(search, commands);

    expect(response.text).toBe("price_response");
  });

  it("should return null with garbage search", () => {
    const search = "87sd8f7sd8f";

    const response = _findResponseWithCommand(search, commands);

    expect(response).toBeNull();
  });
});
