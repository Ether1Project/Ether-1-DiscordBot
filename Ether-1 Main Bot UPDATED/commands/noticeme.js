
module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " I Have Noticed You, Feel Proud! You received your bit of attention.");

}

module.exports.help = {
    name: "noticeme"
}