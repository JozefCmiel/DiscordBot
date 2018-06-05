// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 

// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  
});






client.on("message", async message => {

  
 
  if(message.author.bot) return;
  

  if(message.content.indexOf(config.prefix) !== 0) return;
  
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  
  if(command === "pijymy?") {
    var myArray = ['Jasne', 'Ni', 'Perhaps', 'Wypijymy!' , 'Rozhnodnie ni!'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    message.channel.send(`${rand} @everyone`);
  }
  
  if(command === "flip") {
    
    var myArray = ['True', 'False'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
   
    message.channel.send(`${rand} ${message.author}`);
  }
  if(command === "roll"){
      var min = parseInt(args[0]);
      var max = parseInt(args[1]);
      
      if(min > max){
          var tmp = max;
          max = min;
          min= tmp;
          
      }
      var num = Math.floor(Math.random() *(max - min + 1))+min;
    
   message.channel.send(`${num} ${message.author}`);
  }

  
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
