const { MessageEmbed } = require('discord.js')
const { defaultFooter, profileColor } = require('../../config.json')
const quotes = require('../../data/ChristianQuotes.json')

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args  
 */
module.exports.run = async(client, message, args, prefix) => {
  function randomQuote() {
    var num = Math.floor(Math.random()*quotes.Quotes.length);
    const embed = new MessageEmbed()
      .setAuthor(`Here's a word from ${quotes.Quotes[num].a}:`, 'https://cdn4.iconfinder.com/data/icons/christmas-2233/64/bible-christian-book-cultures-christianity-512.png')
      .setThumbnail(quotes.Quotes[num].authorImg)
      .setDescription(`"${quotes.Quotes[num].q}"`)
      .setColor(profileColor)
      .setFooter(defaultFooter)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
  
  if (!args.length) {
    randomQuote()
  }
}

module.exports.help = {
  name: "quote",
  aliases: []
}