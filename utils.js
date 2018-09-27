module.exports.checkIgnored = (message, client) => {
  /// We ignore every message that is not a command, or
  ///  originating from the bot (runaway spam)

  const isCommand = message.content.startsWith("!");
  const isBot = message.author.id === client.user.id;

  const isIgnored = isBot || !isCommand;

  return isIgnored;
};

module.exports.checkAllowed = (message, channel) => {
  /// A message is allowed if it's a direct message, in the dedicated bot channel,
  ///   or from a hoisted member (show separately from other users)

  const isDm = !message.member;
  const isHoisted = isDm ? false : !!message.member.roles.find("hoist", true);
  const inChannel = isDm ? false : message.channel.id == channel;

  const isAllowed = isDm || isHoisted || inChannel;

  return isAllowed;
};
