class Aggregator {
  constructor() {
    this._store = {};

    this._retrieve();
    setInterval(() => this._retrieve(), 13 * 1000);
  }

  async _retrieve() {
    const marketData = await _getMarketData();
    const chainData = {};
    this._store = _mergeData(this._store, marketData, chainData);
  }

  getStore() {
    return this._store;
  }
}

const axios = require("axios");

function _mergeData(store, marketData, chainData) {
  // return an updated version of store
  return { ...store, ...marketData, ...chainData };
}

async function _getMarketData() {
  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/ether-1/"
    );
    const data = result.data.market_data;

    const results = {
      priceBtc: data.current_price.btc,
      priceUsd: data.current_price.usd,
      volumeBtc: data.total_volume.btc,
      volumeUsd: data.total_volume.usd,
      marketCapBtc: data.market_cap.btc,
      marketCapUsd: data.market_cap.usd
    };

    return { ...results, ...derivedResults };
  } catch (e) {
    // market API is not responding, we'll try again later
    return {};
  }
}

module.exports.Aggregator = Aggregator;

module.exports.test = { _mergeData };
