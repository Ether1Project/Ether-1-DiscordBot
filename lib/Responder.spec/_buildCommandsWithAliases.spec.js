const { _buildCommandsWithAliases } = require("../Responder.js").test;

describe("_buildCommandsWithAliases", () => {
  const commands = {
    price: "price_response",
    height: "height_response"
  };

  const aliases = {
    price: ["market", "value"]
  };

  it("should copy commands that match the aliases", () => {
    const library = _buildCommandsWithAliases(commands, aliases);

    expect(library).toHaveProperty("market");
    expect(library).toHaveProperty("value");
  });

  it("should copy responses that match the commands", () => {
    const library = _buildCommandsWithAliases(commands, aliases);

    expect(library["market"]).toBe("price_response");
  });

  it("should contain the original commands", () => {
    const library = _buildCommandsWithAliases(commands, aliases);

    expect(library["price"]).toBe("price_response");
  });
});
