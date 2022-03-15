const client = require('../index.js').client
const { createCmd } = require('../dataHandler')

client.on('ready', ready => {
  console.log('The bot is ready.')
  client.user.setActivity('John 3:16-17')
  createCmd(client)
})