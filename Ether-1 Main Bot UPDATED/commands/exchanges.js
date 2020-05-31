const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 840032,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "ETHER-1",
    url: "https://ether1.org/platforms.html",
    description: "Ether-1 Exchanges.",
    fields: [
      {
        name: "STEX",
        value: "You can check it 👉 [HERE](https://app.stex.com?ref=02428733) 👈"
      },
      {
        name: "Graviex",
        value: "You can check it 👉 [HERE](https://graviex.net/markets/ethobtc) 👈"
      },
      {
        name: "Mercatox",
        value: "You can check it 👉 [HERE](https://mercatox.com/exchange/ETHO/BTC) 👈"
      },
      {
        name: "SafeTrade",
        value: "You can check it 👉 [HERE](https://safe.trade/trading/ethobtc) 👈"
      },
      {
        name: "ChainEx",
        value: "You can check it 👉 [HERE](https://chainex.io/markets/ETHO/BTC) 👈"
      },
     
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© ETHO Master by Dylie"
    }
  }
});
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'exchanges',
  description: 'shows Ether-1 exchanges.',
  usage: 'exchanges'
};