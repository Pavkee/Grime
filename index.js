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



app.get('/', (req, res) => {
  res.send('Placeholder!')
})

client.on('ready', () => {
  client.user.setUsername('Pavicord');
  client.user.setPresence({
    status: 'online',
    activity: {
        type: 'WATCHING',
        name: 'for commands',
        url: 'https://discordapp.com/',
    }
});
    

console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.author.bot) {
    return
  }

  if (isCommand(PREFIX, 'ping', msg.content)) {
  msg.reply('pong!')
 }

})

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }
  
  if (/d[o0]+g/i.test(msg.content)) {
    const reactions = ["724331980916916294", "709181387579850813", "728901746465833000", "724332108251922452", "724331874402435094", "724332311562158210", "735223251118194719", "735235005218816010"]
    const randomreact = reactions[Math.floor(Math.random() * reactions.length)];
    msg.react(randomreact);
  }
  
})

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }

  if (msg.content.toLowerCase().includes('lmfao')) {
    msg.react('758702122665246780');
    msg.channel.send('Perhaps, I am laughing my fucking ass off too.');
  }

})

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }

  if (msg.content.toLowerCase().includes('lol')) {
    msg.react('758708448057229312');
  }
  
})

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }

  if (msg.content.toLowerCase().includes('lmao')) {
    msg.react('748498280694022195');
    msg.channel.send('Laughing my doggy ass off.');
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

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }

  if (isCommand(PREFIX, 'franticroll', msg.content)) {
    const min = 83
    const max = 780
    const x = Math.floor(Math.random() * (max - min)) + min 
    msg.channel.send(x);
  }

})

 

client.login(process.env.TOKEN)
server.listen(PORT)
