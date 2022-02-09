const client = require('../index.js').client

client.on('ready', ready => {
  console.log('The bot is ready.')
  client.user.setActivity('John 3:16-17')
})