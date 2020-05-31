const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Join-Rank Information", "ETHO Master")
    .addField("!musichelp, !music", "Displays this message")
    .addField("!join", "Bot joins the message author's voice channel")
    .addField("!leave", "Bot leaves the voice channel")
    .addField("!add", "Adds a song the the queue")
    .addField("!play", "Bot starts playing your added songs")
    .addField("!pause", "Pauses the current song")
    .addField("!resume", "Resumes the current song")
    .addField("!skip", "Skips the current song")
    .addField("!queue", "See what songs are inside the bot's queue")
    .addField("!playing", "Get information from the current song")
    .addField("!time", "Check how much time is left for the song to end")
    .addField("!autplay", "Toggle the autoplayer, the autoplayer grabs data from the last song you added and plays more songs from this category")
    .addField("Created by", "Dylie");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"musichelp"
}