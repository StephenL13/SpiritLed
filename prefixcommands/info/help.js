const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
  const embed = new MessageEmbed()
    .setTitle('Welcome to SpiritLed!')
    .setDescription("**Here are the following commands to get started.**\n\n\`=quote\` - Randomly generated Christian quotes from well-known preachers, pastors, theologians, and figures who affirm to the Gospel\n\n\`=help\` - Commands list\n\`=support\` - Support server link\n\nDISCLAIMER: This bot is only limited to select Christian Discord servers approved by the developer.")
    .setColor(profileColor)
    .setFooter({ text: defaultFooter })
    .setTimestamp()
  await message.channel.send({ embeds: [embed] })
}

module.exports.command = {
  name: "help",
  aliases: []
}