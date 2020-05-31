const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("CoinMarketCap Commands", "ETHO Master")
    .addField("Version", "1.4")
    .addField("!cmchelp or !helpcmc", "Displays this message")
    .addField("$etho", "Displays all the cmc data for etho!")
    .addField("$cointickerhere", "The bot will display any coin's data! You just have to fill in the coins ticker after the $")
    .addField("Created by", "Dylie")
    .addField("Official server (if you need help or are interested)", "https://discord.gg/3tvP6pP");


    message.channel.send(botembed);
}

module.exports.help = {
  name:"cmchelp"
}