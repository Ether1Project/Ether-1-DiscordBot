class Aggregator {
  constructor() {
    //
    this._store = {
      price: "23 sats"
    };
  }

  getStore() {
    return this._store;
  }
}

module.exports.Aggregator = Aggregator;
