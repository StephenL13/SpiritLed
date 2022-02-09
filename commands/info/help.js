const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
  const embed = new MessageEmbed()
    .setTitle('Welcome to SpiritLed!')
    .setDescription("**Here are the following commands to get started.**\n\n`=quote` - Randomly generated Christian quotes from famous preachers, pastors, theologians, and figures of all time\n`=confessions` - Sub-command list of doctrinal positions/documents/catechisms\n\n`=help` - Commands list\n`=support` - Support server link\n\nDISCLAIMER: This bot is only limited to beta testers right now. If it's God's will to keep this in public, we'll let you know in our support server.")
    .setColor(profileColor)
    .setFooter(defaultFooter)
    .setTimestamp()
  message.channel.send({ embeds: [embed] })
}

module.exports.help = {
  name: "help",
  aliases: []
}