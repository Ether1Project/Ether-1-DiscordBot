const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", "Ether-1 bot")
    .addField("Version", "1.4 Official Release")
    .addField("Changelog", "Added the '$' prefix command. Use this to display coinmarketcap data! example: $etho")
    .addField("Created by", "Dylie")
    .addField("Official server (if you need help or are interested)", "https://discord.gg/3tvP6pP");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}