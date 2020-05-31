const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 840032,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "ETHER-1",
    url: "https://ether1.org/wallets.html",
    description: "Ether-1 Wallets.",
    fields: [
      {
        name: "Web Wallet",
        value: "You can get your wallet 👉 [HERE](https://wallet.ethofs.com/) 👈"
      },
      {
        name: "ETHOMask",
        value: "You can get your wallet 👉 [HERE](https://chrome.google.com/webstore/detail/metamask-etho-edition/ilefaekjipjmggdgegmlneepdkmhbanm?hl=en) 👈"
      },
      {
        name: "IOS Wallet",
        value: "You can get your wallet 👉 [HERE](https://docs.google.com/forms/d/e/1FAIpQLSf_J0oKjAtdsBRUYkiJqlCkxjDIRBRXbT87Ppunr-7h2gqvEA/viewform) 👈"
      },
      {
        name: "Android Wallet",
        value: "You can get your wallet 👉 [HERE](https://play.google.com/store/apps/details?id=com.ether1.trust.wallet) 👈"
      },
      {
        name: "Desktop Wallet",
        value: "You can get your wallet 👉 [HERE](https://github.com/Ether1Project/Ether-1-Desktop-Wallet) 👈"
      },
      {
        name: "BETA Desktop Wallet",
        value: "You can get your wallet 👉 [HERE](https://github.com/taeguscromis/Ether1DesktopWallet) 👈"
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
  name: 'wallets',
  description: 'shows Ether-1 exchanges.',
  usage: 'wallets'
};