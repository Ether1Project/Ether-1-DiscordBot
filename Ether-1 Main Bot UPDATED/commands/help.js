const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Commands", "ETHO Master")
    .addField("Version", "1.4")
    .addField("!help or !commands", "Displays this message")
    .addField("!blockchain", "Displays chain info such as hashrate and blocktime")
    .addField("!price", "Displays ETHO's current price")
    .addField("!volume or !vol", "Displays ETHO's current volume")
    .addField("!height", "Displays chain height")
    .addField("!market", "Displays current trading price in sats + volume in BTC")
    .addField("!marketcap or !cap", "Displays market cap")
    .addField("!blocktime", "Displays the current blocktime")
    .addField("!difficulty or !diff", "Displays current difficulty")
    .addField("!hashrate", "Displays current hashrate in GH")
    .addField("!terahash", "Displays current hashrate in TH")
    .addField("!report @user reason", "Report someone (with a valid reason)")
    .addField("!help2 or !commands2", "Displays page 2 of the command/help list")   
    .addField("Created by", "Dylie")
    .addField("Official server (if you need help or are interested)", "https://discord.gg/3tvP6pP");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}