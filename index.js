const { token, channel } = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(token);
console.log(token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", message => {
  const isBot = message.author.id === client.user.id; // tested

  const isDm = !message.member; // tested
  const isHoisted = isDm ? false : !!message.member.roles.find("hoist", true); // tested
  const inChannel = isDm ? false : message.channel.id == channel; // tested

  const isAllowed = isDm || isHoisted || inChannel;

  /// igonre our own messages
  if (isBot) return null;

  if (isAllowed) {
    message.reply("reply ping");
  } else {
    message.author.send("dm ping");
  }
});
