const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
    if(message.author.id === '136292974379270144') {
      const embed = new MessageEmbed()
      .setTitle(`Confession Lists`)
      .setDescription('`=ncc` - New City Catechism from Crossway and The Gospel Coalition\n`=hc` - Heidelberg Catechism\n\nOther features are yet in development.')
      .setColor(profileColor)
      .setFooter(defaultFooter)
      .setTimestamp()
      message.channel.send({ embeds: [embed] })
    } else {
      const embed = new MessageEmbed()
      .setTitle(`Confession Lists`)
      .setDescription('`=ncc` - New City Catechism from Crossway and The Gospel Coalition\n`=hc` - Heidelberg Catechism\n\nOther features are yet in development.')
      .setColor(profileColor)
      .setFooter(defaultFooter)
      .setTimestamp()
    }
}

module.exports.help = {
  name: "confessions",
  aliases: ["confess"]
}