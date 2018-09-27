const { _mergeData } = require("../Aggregator").test;

describe("_mergeData", () => {
  const store = { keep: "this_data", update: "this_data" };
  const marketData = { update: "updated_data" };
  const chainData = { add: "added_data" };

  it("should merge properly", () => {
    const result = _mergeData(store, marketData, chainData);

    expect(result.keep).toBe("this_data");
    expect(result.update).toBe("updated_data");
    expect(result.add).toBe("added_data");
  });
});
