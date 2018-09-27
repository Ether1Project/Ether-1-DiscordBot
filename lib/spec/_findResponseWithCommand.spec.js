const { _findResponseWithCommand } = require("../Responder.js").test;

describe("_findResponseWithCommand", () => {
  const commands = {
    price: "price_response",
    height: "height_response"
  };

  it("should find an exact command", () => {
    const search = "price";

    const { response, foundResponse } = _findResponseWithCommand(
      search,
      commands
    );

    expect(foundResponse).toBe(true);
    expect(response).toBe("price_response");
  });

  it("should find a command with a missing letter", () => {
    const search = "prce";

    const { response, foundResponse } = _findResponseWithCommand(
      search,
      commands
    );

    expect(foundResponse).toBe(true);
    expect(response).toBe("price_response");
  });

  it("should return null with garbage search", () => {
    const search = "87sd8f7sd8f";

    const { response, foundResponse } = _findResponseWithCommand(
      search,
      commands
    );

    expect(foundResponse).toBe(false);
    expect(response).toBeNull();
  });
});
