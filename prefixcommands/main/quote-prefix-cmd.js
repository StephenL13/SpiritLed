const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
const quotes = require('../../data/ChristianQuotes.json')
module.exports.run = async(client, message, args, prefix) => {
  var num = Math.floor(Math.random()*quotes.Quotes.length);
  const embed = new MessageEmbed()
    .setAuthor({ 
      name: `Here's a word from ${quotes.Quotes[num].a}:`,
      iconURL: 'https://cdn4.iconfinder.com/data/icons/christmas-2233/64/bible-christian-book-cultures-christianity-512.png'
    })
    .setThumbnail(quotes.Quotes[num].authorImg)
    .setDescription(`"${quotes.Quotes[num].q}"`)
    .setColor(profileColor)
    .setFooter({ text: defaultFooter })
    .setTimestamp()
  await message.channel.send({ embeds: [embed] })
}

module.exports.help = {
  name: "quote",
  aliases: []
}