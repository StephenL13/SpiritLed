const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
const { NewCityCatechism } = require('../../data/NewCityCatechism.json')
module.exports.run = async(client, message, args, prefix) => {
  const ncc = NewCityCatechism
    if(message.author.id === '136292974379270144'){
      if(!args.length) {
        const embedinquire = new MessageEmbed()
          .setTitle('Please enter the questions number.')
          .setDescription('The `New City Catechism` is listed up to **52** questions, divided to three parts.')
        message.channel.send({ embeds: [embedinquire] })
      }

      if (args[0] === '1') {
        const embed = new MessageEmbed()
          .setTitle(ncc[1].q)
          .setDescription(ncc[1].a+`\n\n[To learn more, click here.](${ncc[1].link})`)
          .setColor(profileColor)
          .setFooter(defaultFooter)
        message.channel.send({embeds:[embed]})
      } else if (args[0] === '2') {
        const embed = new MessageEmbed()
          .setTitle(ncc[2].q)
          .setURL(ncc[2].link)
          .setDescription(ncc[2].a+`\n\n[To learn more, click here.](${ncc[2].link})`)
          .setColor(profileColor)
          .setFooter(defaultFooter)
        message.channel.send({embeds:[embed]})
      } else if (args[0] === '3') {
        const embed = new MessageEmbed()
          .setTitle(ncc[3].q)
          .setURL(ncc[3].link)
          .setDescription(ncc[3].a+`\n\n[To learn more, click here.](${ncc[3].link})`)
          .setColor(profileColor)
          .setFooter(defaultFooter)
        message.channel.send({embeds:[embed]})
      } else if (args[0] === '4') {
        const embed = new MessageEmbed()
          .setTitle(ncc[4].q)
          .setURL(ncc[4].link)
          .setDescription(ncc[4].a+`\n\n[To learn more, click here.](${ncc[4].link})`)
          .setColor(profileColor)
          .setFooter(defaultFooter)
        message.channel.send({embeds:[embed]})
      } 
    } else {
      message.react('❌')
      const error = new MessageEmbed()
        .setTitle(`This feature is still under development.`)
        .setColor(profileColor)
        .setFooter(defaultFooter)
        .setTimestamp()
      message.channel.send({ embeds: [error] })
    }
}

module.exports.help = {
  name: "ncc",
  aliases: []
}