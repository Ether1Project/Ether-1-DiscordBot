# Ether-1 Discord Bot

## Introduction

@Newsmaker22™#5495 requested a Discord Bot for their cryptocurrency project called `Ether-1`. They will be hosting and maintaining the bot.

## Core Features

Discord bot that responds to the commands provided below, prefixed with "!". 

Respond to messages in specific channels, message from hoisted accounts, delete commands not understood or not allowed. Respond to DMs.

## External Data Required

CoinGecko will provide market data.

```
chain: hashrate, difficulty, blockTime, height,
market: price, volume, marketCap, supply,
```



# Resources 

## Public APIs

### CoinGecko
https://www.coingecko.com/en/coins/ether-1#panel
https://www.coingecko.com/api/docs/v3#/coins/get_coins__id__history

Provides market data, current and historical, and social media info

## Unconfirmed APIs

The team has a minimal API that they can add anything to

Extensive chain stats
https://stats.ether1.org

Chain stats and possibly wallet balances
https://explorer.ether1.org/home

## Other links
https://bitcointalk.org/index.php?topic=3725742
https://github.com/Ether1Project/Ether1/releases





## Commands

```
// dynamic




    'blockchain':     {response: ${hashrate}, ${difficulty} diff, ${blockTime}/block, and retargeting every block},
    'market':         {response: we're trading at ${priceBtc}, with ${volumeBtc} daily volume, and a ${marketCapBtc} market cap},

    'price':          {response: price is ${priceBtc}},
    'volume':         {response: volume is ${volumeBtc} per day},
    'marketcap':      {response: market cap is ${marketCapBtc}},
    'supply':         {response: circulating supply is ${supply}},
    'hashrate':       {response: network hashrate is ${hashrate}.},
    'difficulty':     {response: difficulty is ${difficulty}},
    'blocktime':      {response: blocktime is approximately ${blockTime}, with a target of 1 minute},
    'height':         {response: blockheight is ${height}},
    'retarget':       {response: we now use LWMA which retargets every block},


  // static
    'stats':          {response: !price, !volume, !marketcap, !supply, !hashrate, !difficulty, !blocktime, !retarget :chart_with_upwards_trend:},

    'commands':       {response: https://github.com/Pigeoncoin/bot/blob/master/lib/getReply.js#L64-L157%7D,



    'explorer':       {response: https://explorer.pigeoncoin.org/%7D,
    'website':        {response: https://pigeoncoin.org/%7D,
    'exchange':       {response: we have trading pairs with Ravencoin, Litecoin, and Bitcoin on CryptoBridge! https://crypto-bridge.org/%7D,
    'roadmap':        {response: https://pigeoncoin.org/roadmap/%7D,
    'whitepaper':     {response: the X16S (shuffle) mini-whitepaper is here https://pgn.gg/whitepaper%7D,
    'whattomine':     {response: Pigeoncoin, of course! https://pool.pigeoncoin.org/%7D,
    'resources':      {response: https://pigeoncoin.org/#resources%7D,
    'release':        {response: https://github.com/Pigeoncoin/pigeoncoin/releases%7D,
    'nodes':          {response: 'http://138.197.15.79/network%27%7D,
    'twitter':        {response: https://twitter.com/Pigeoncoin%7D,
    'github':         {response: https://github.com/Pigeoncoin%7D,
    'reddit':         {response: https://www.reddit.com/r/Pigeoncoin/%7D,
    'telegram':       {response: https://t.me/Pigeoncoin%7D,
    'medium':         {response: https://medium.com/@pigeoncoin%7D,
    'youtube':        {response: https://pgn.gg/youtube%7D,

    'mobile':         {response: yesterday?},

    'masternode':     {response: tomorrow?},

    'coinmarketcap':  {response: https://coinmarketcap.com/currencies/pigeoncoin/%7D,
    'coingecko':      {response: we're there! https://www.coingecko.com/en/coins/pigeoncoin%7D,
    'livecoinwatch':  {response: :thinking:},
    'whattomine':     {response: https://pgn.gg/whattomine%7D,
    'cryptobridge':   {response: we have trading pairs with Ravencoin, Litecoin, and Bitcoin on CryptoBridge! https://crypto-bridge.org/%7D,
    'cobinhood':      {response: :thinking:},
    'cryptopia':      {response: ':thinking:'},
    'bittrex':        {response: ':thinking:'},
    'binance':        {response: ':thinking:'},
    'coinbase':       {response: ':thinking:'},

    'birthday':       {response: March 21st!},
    'timestamp':      {response: Reuters 21/Mar/2018 China stays on the sidelines as Venezuela spirals downward.},
    'maxsupply':      {response: max supply is 21B PGN},
    'blockreward':    {response: 5000 PGN is awarded every minute},

    'moon':           {reaction: ':rocket:'},
    'lambo':          {response: when lambo?! When land!},
    'surfin':         {response: :surfer:\nhttps://www.youtube.com/watch?time_continue=80&v=gBexh377HbQ%7D,
    'handsome boy':   {files: ['./img/handsome-boy.jpg']},
    'nasdaq':         {reaction: ':chart_with_upwards_trend:'},
    'good bot':       {reaction: ':thumbsup:'},
    'bad bot':        {reaction: ':thumbsdown:'},
```
