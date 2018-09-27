const { token } = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(token);
console.log(token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", message => {
  const isBot = message.author.id === client.user.id;
  const isDm = !message.member;
  const isHoisted = isDm ? false : !!message.member.roles.find("hoist", true);

  /// don't reply to our own messages
  if (!isBot) {
    console.log(`isHoisted ? ${isHoisted}`);
    console.log(`isDm ? ${isDm}`);
    message.reply("reply ping");
    message.author.send("dm ping");
  }
});
