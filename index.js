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

var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */
 
var discord = require("discord.js");
var client = new discord.Client();
 
 
// Login into discord using bot token (do not share token with anyone!).
client.login(process.env.TOKEN);
 
client.on("ready", function() {
    console.log("logged in");
});
 
client.on("message", function(message) {
 
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === "!image") { // Check if first part of message is image command
 
        // call the image function
        image(message, parts); // Pass requester message to image function
 
    }
 
});
 
function image(message, parts) {
 
    /* extract search query from message */
 
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send( urls[0] );
    });
 
}

 

client.login(process.env.TOKEN)

  
