const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express')
const http = require('http')
const PORT   = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const isRunningLocaly = require('os').hostname() === 'DESKTOP-EHM4SR0'
const PREFIX = isRunningLocaly ? '-' : '+'


function isCommand (prefix, command, content) {
  return (new RegExp('^' + prefix.replace(/(.)/g, '\\$1') + command + '(?=\\s+|$)')).test(content)
}

server.listen(PORT)


app.get('/', (req, res) => {
  res.send('Placeholder!')
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }
  if (/d[o0]+g/i.test(msg.content)) {
    const reactions = ["724331980916916294", "709181387579850813", "728901746465833000", "724332108251922452", "724331874402435094", "724332311562158210"]
    const randomreact = reactions[Math.floor(Math.random() * reactions.length)];
    msg.react(randomreact);
  }
  
})

client.on('message', msg => {

  if (msg.author.bot) {
    return
  }

  if (isCommand(PREFIX, 'ask', msg.content)) {
    const replies = ["Yes.", "No.", "Perhaps.", "Ain't sure...", "Can't tell...", "Wouldn't bet.", "  Definitely not!", "No way!", "Stop asking me shit.", "Ayy, i like this one! The answer is YES!", "I like your way of thinking... but no."]
    const randomreply = replies[Math.floor(Math.random() * replies.length)];
    msg.channel.send(randomreply);
  }
  
})

if (isCommand(PREFIX + 'pb')) {
  const images = ["https://i.imgur.com/Zph9UYG.png", "https://i.imgur.com/q3Z2vm7.png"]
  const descriptions = ["Test", "Idk"]
  const randomimage = images[Math.floor(Math.random() * images.length)];
  const randomdescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  msg.channel.send({embed: {
    color: 3447003,
    description: "randomdescription"
  }})
}
 

client.login(process.env.TOKEN)
