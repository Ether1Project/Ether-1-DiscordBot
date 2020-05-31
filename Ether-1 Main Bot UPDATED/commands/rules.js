const Discord = module.require('discord.js');

var rules1 = new Discord.RichEmbed()
        .addField("Rules (1/1)", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ Be respectful and constructive in all your discussions with other Ether-1 community members. \n" +
                                  "__**2.**__ Absolutely no FUD regarding the Ether-1 project. If you have something important & potentially disturbing to communicate, speak directly with a member of (AT)PROJECT MANAGER.  \n" +
                                  "__**3.**__ Don't be openly disparaging against other crypto projects. ETHO builds, it doesn't tear things down. \n" +
                                  "__**4.**__ Refrain from posting advertising, self-promotional, spammy or referral materials or links except those directly connected to the Ether-1 project. \n" +
                                  "__**5.**__ Make sure you're using the appropriate channel for the information posted. The intended subjects of the channels are self-explanatory. \n" +
                                  "__**6.**__ Use the OFF-TOPIC channels to discuss subjects not related to Ether-1.\n", true)

        .setColor("0xFF0000")


module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("Bin2:362263530424107009")
              })

}

module.exports.help = {
    name: "rules"
}