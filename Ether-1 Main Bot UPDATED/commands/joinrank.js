const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Join-Rank Information", "ETHO Master")
    .addField("!rank, !joinrank, !role, !joinrole", "Displays this message")
    .addField("Give yourself a rank!", "Head over to the #join-rank channel and follow the instructions!")
    .addField("Created by", "Dylie");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"joinrank"
}