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
const fetch = require('node-fetch')


const querystring = require('querystring');
const r2          = require('r2');
const Discord     = require('discord.js');

const DOG_API_URL   = "https://api.thedogapi.com/"
const DOG_API_KEY   = "c43a406b-bc06-4b22-912e-c47b4352fa23"; // get a free key from - https://thedogapi.com/signup
const DISCORD_TOKEN = 'NzMxMTQzMDAyNTc5MjcxNzcw.Xwhv-w.tQUzVpaeYSMJIzkDUbcBE3bNOxk'; // get your bot specific Token - https://discordapp.com/developers/applications/me/create

// Discord connection code ---
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message' ,message => {

  if (message.content === 'woof') {
    messageRecieved(message);
  }
});

client.on('error', data => {
  console.log('error',data);
  // attempt reconnection x times, after x seconds, exponential backoff
});
client.login(DISCORD_TOKEN);

/**
 * Called whenever a message is posted into the same channel as the Bot
 */
async function messageRecieved(message)
{
  try{
    // pass the name of the user who sent the message for stats later, expect an array of images to be returned.
    var images = await loadImage(message.author.username);

    // get the Image, and first Breed from the returned object.
    var image = images[0];
    var breed = image.breeds[0];

    console.log('message processed','showing',breed)
    // use the *** to make text bold, and * to make italic
    message.channel.send( "***"+breed.name + "*** \r *"+breed.temperament+"*", { files: [ image.url ] } );
    // if you didn't want to see the text, just send the file

  }catch(error)
  {
    console.log(error)
  }
}
/**
 * Makes a request to theDogAPI.com for a random dog image with breed info attached.
 */
async function loadImage(sub_id)
{
  // you need an API key to get access to all the iamges, or see the requests you've made in the stats for your account
  var headers = {
      'X-API-KEY': DOG_API_KEY,
  }
  var query_params = {
    'has_breeds':true, // we only want images with at least one breed data object - name, temperament etc
    'mime_types':'jpg,png', // we only want static images as Discord doesn't like gifs
    'size':'small',   // get the small images as the size is prefect for Discord's 390x256 limit
    'sub_id': sub_id, // pass the message senders username so you can see how many images each user has asked for in the stats
    'limit' : 1       // only need one
  }
  // convert this obejc to query string 
  let queryString = querystring.stringify(query_params);

  try {
    // construct the API Get request url
    let _url = DOG_API_URL + `v1/images/search?${queryString}`;
    // make the request passing the url, and headers object which contains the API_KEY
    var response = await r2.get(_url , {headers} ).json
  } catch (e) {
      console.log(e)
  }
  return response;

}
 


  

  
  


  client.login(process.env.TOKEN)
  
