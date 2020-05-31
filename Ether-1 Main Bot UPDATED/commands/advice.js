module.exports.run = (bot, message, args, discord) => {
  require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      message.channel.send(`**My Advice:**\n${JSON.parse(body).slip.advice}`)
    } else {
      message.channel.send(`**My Advice:**\n I couldn't think of any advice...`)
    }
  });
}

module.exports.help = {
  name: "advice"
}