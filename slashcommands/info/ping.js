const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
module.exports.run = async(client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`Hi! You have ${client.ws.ping} ms.`)
      .setColor(profileColor)
      .setFooter({ text: defaultFooter })
      .setTimestamp()
    await interaction.reply({ embeds: [embed], ephemeral: true })
}

module.exports.command = {
  name: "ping",
  aliases: []
}