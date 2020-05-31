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
    description: "",
    fields: [
      {
        name: "Etho Fuse",
        value: "You can check out Fuse, the fully decentralised HODL Smart Contract 👉 [HERE](http://www.ethofuse.net) 👈"
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
  name: 'fuse',
  description: 'Shows ethofuse info.',
  usage: 'fuse'
};