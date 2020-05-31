const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
  let embed = new Discord.RichEmbed()
  .setTitle("Restart")
  .setDescription("Sorry, the `restart` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '215055968298467329') return message.channel.send(embed);
  
message.channel.send(`ETHO Master has been restarded with succes! Restart took ${Math.floor(bot.ping)}ms`).then(() =>{
process.exit(1);
})
 

                                           }
module.exports.help = {
name: "restart"
}
           