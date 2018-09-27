const axios = require("axios");

class Aggregator {
  constructor() {
    this._store = {};

    this._retrieve();
    setInterval(() => this._retrieve(), 13 * 1000);
  }

  async _retrieve() {
    const marketData = await _getMarketData();
    const chainData = await _getChainData();
    this._store = _mergeData(this._store, marketData, chainData);
  }

  getStore() {
    return this._store;
  }
}

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

    const values = {
      price: results.priceBtc * 1e8,
      volume: results.volumeBtc.toPrecision(2),
      marketCap: results.marketCapBtc.toPrecision(2)
    };

    return values;
  } catch (e) {
    // market API is not responding, we'll try again later
    return {};
  }
}

async function _getChainData() {
  try {
    const result = await axios.get(
      "https://api.ether1.org/api.php?api=network_stats"
    );
    const data = result.data;

    const results = {
      height: data.block_height,
      blocktime: data.blocktime,
      difficulty: data.difficulty,
      hashrate: data.hashrate
    };

    const values = {
      height: results.height.toLocaleString(),
      blocktime: results.blocktime.toPrecision(2),
      difficulty: results.difficulty.toLocaleString(),
      gigahash: Math.round(results.hashrate / 1e9)
    };

    return values;
  } catch (e) {
    // market API is not responding, we'll try again later
    return {};
  }
}
module.exports.Aggregator = Aggregator;

module.exports.test = { _mergeData };
