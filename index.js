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

  const { text, reaction } = response;

  const foundText = !!text;
  const foundReaction = !!reaction;

  if (foundResponse) {
    if (isAllowed) {
      if (foundReaction) message.react(reaction);
      if (foundText) message.reply(response.text);
    } else {
      if (foundText) message.author.send(response.text);
    }
  } else {
    console.log("no response");
  }
});
