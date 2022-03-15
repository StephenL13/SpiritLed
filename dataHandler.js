async function createCmd(client, guildId) {
    const data = [
        {
            name: "ping",
            description: "Replies for a bot ping in milliseconds"
        }, 
        {
            name: "help",
            description: "A list of all bot commands"
        },
        {
            name: "quote",
            description: "Randomly generated Christian quotes from well-known preachers, pastors, theologians, and figures who affirm to the Gospel"
        }
    ]
    
    await client.application?.commands.set(data)
}

module.exports = { createCmd }