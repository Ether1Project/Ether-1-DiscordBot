const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to clear the chat. I feel sorry for you.");
  if(!args[0]) return message.channel.send("I can't clear the whole chat, you dummy.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}