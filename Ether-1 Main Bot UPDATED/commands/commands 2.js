const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Commands page 2", "ETHO Master")
    .addField("Version", "1.4")
    .addField("!help2 or !commands2", "Displays this message")
    .addField("!serverinfo", "Displays server information")
    .addField("!botinfo", "Displays bot information")
    .addField("!uptime", "Displays x amount of time the bot has been running")
    .addField("!website or !site", "Displays the ETHO website")
    .addField("!masternodes or !nodes", "Displays ETHO masternode website")
    .addField("!whitepaper", "Displays ETHO's whitepaper")
    .addField("!wallet", "Displays ETHO's wallet website")
    .addField("!explorer", "Displays ETHO's explorer website")
    .addField("!network or !stats", "Displays ETHO's network website")
    .addField("!blocktime", "Displays the current blocktime")
    .addField("!calendar or !roadmap", "Displays ETHO's roadmap/calendar website")
    .addField("!releases", "Displays ETHO's latest Github releases")
    .addField("!translate english SentenceInOtherLanguage", "Translates your sentence to English")
    .addField("!translate lang SentenceInOtherLanguage", "Translates what the person is speaking in his language English")
    .addField("!weather location", "Shows the current weather on a certain location")
    .addField("!poll question", "Create a poll, users can react by clicking an emoji!")
    .addField("WOOOOOOOOOOT! You've reached the end of the help pages!", "Congrats!")
    .addField("Created by", "Dylie")
    .addField("Official server (if you need help or are interested)", "https://discord.gg/3tvP6pP");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"commands2"
}