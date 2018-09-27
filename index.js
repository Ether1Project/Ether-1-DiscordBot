const config = require("./config.json");
const { checkIgnored, checkAllowed } = require("./utils.js");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(config.token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("disconnect", () => {
  console.warn(`We were disconnected`);
  client.login(config.token);
});

client.on("message", message => {
  const isIgnored = checkIgnored(message, client);
  const isAllowed = checkAllowed(message, config.channel);

  if (isIgnored) return null;

  if (isAllowed) {
    message.reply("reply ping");
  } else {
    message.author.send("dm ping");
  }
});
