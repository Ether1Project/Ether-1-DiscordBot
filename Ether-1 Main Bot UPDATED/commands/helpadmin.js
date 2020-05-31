const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("OHNO! It looks like you tried to access an admin command! I'm sorry I can't let you do that...");
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Admin commands", "ETHO Master")
    .addField("Version", "1.4")
    .addField("!helpadmin or !admincommands", "Displays this message")
    .addField("!say", "This command will let the bot broadcast a global message. You have to add @everyone if needed")
    .addField("!clear x amount", "This will clear x amount of messages")
    .addField("!prefix", "Use this command to change the bot's prefix !NOTE: DO NOT TOUCH UNLESS DYLIE APPROVES!")
    .addField("!tempmute @username x amount of time", "This will tempmute the person, make sure to add s for seconds or m for minuts behind the amount of time")
    .addField("!kick @username", "This will kick the person from the server")
    .addField("!warn @username", "This will warn the person NOTE: 2 warns = 5 minut mute, 3 warns = kick from server")
    .addField("!checkwarn @username", "This will show you how many warns a person has.")
    .addField("!ban @username", "This will permanently ban the person from the server")
    .addField("!addrole @username rolename", "This will give the selected user the chosen role")
    .addField("!removerole @username rolename", "This remove the chosen role from the selected user, setting him back to default role")
    .addField("Created by", "Dylie")
    .addField("Official server (if you need help or are interested)", "https://discord.gg/3tvP6pP");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"helpadmin"
}