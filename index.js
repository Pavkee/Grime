const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express')
const http = require('http')
const PORT   = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const isRunningLocaly = require('os').hostname() === 'DESKTOP-EHM4SR0'
const PREFIX = isRunningLocaly ? '-' : '+'

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
    msg.react('709181387579850813')
  }
  
})

client.on('message', msg => {

  if (msg.author.bot) {
    return
  }

  if (msg.content.includes("ask")) {
    const replies = ["yes", "no", "maybe"]
    const randomreply = replies[Math.floor(Math.random() * replies.length)];
    msg.channel.send(randomreply);
  }
  
})
 

client.login(process.env.TOKEN)




