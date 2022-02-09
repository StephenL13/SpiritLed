const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
    const embed = new MessageEmbed()
      .setTitle(`Hi, ${message.author.tag}! You have ${client.ws.ping} ms.`)
      .setColor(profileColor)
      .setFooter(defaultFooter)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
}

module.exports.help = {
  name: "ping",
  aliases: []
}