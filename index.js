const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase().includes('dog')) { 
    msg.react('709181387579850813')
  }
  if (msg.author.bot) {
    return
  }
  
})



client.login('NzMxMTQzMDAyNTc5MjcxNzcw.XwhwpA.d7SR8m9Xqp6Wseex9finMGqF_vk');

