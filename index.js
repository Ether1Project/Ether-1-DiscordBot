const config = require("./config.json");
const { checkIgnored, checkAllowed } = require("./lib/utils");

const { Responder } = require("./lib/Responder.js");
const responder = new Responder();

const { Aggregator } = require("./lib/Aggregator.js");
const aggregator = new Aggregator();

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

  /// get response
  const command = message.content;
  const store = aggregator.getStore();

  const { foundResponse, response } = responder.getResponse(command, store);

  if (foundResponse) {
    if (isAllowed) {
      message.reply(response);
    } else {
      message.author.send(response);
    }
  } else {
    console.log("no response");
  }
});
