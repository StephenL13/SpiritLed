module.exports.run = async(client, message, args, prefix) => {
  message.react('📬')
  message.author.send("This is the server invite link to the support. If you have questions, comments, and/or suggestions, leave it here.\n\nhttps://discord.gg/ghN4SzhJTB")
}

module.exports.help = {
  name: "support",
  aliases: []
}