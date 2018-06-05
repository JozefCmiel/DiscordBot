
const Discord = require('discord.js');


const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
});






client.on('message',  message => {

  
 
  if(message.author.bot) return;
  

  if(message.content.indexOf("!") !== 0) return;
  
 
  const args = message.content.slice(1).trim().split(/ +/g);
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
       if(args[0] == null){
      var min = 0;
      var max = 10;
    }
    else {
      var min = parseInt(args[0]);
      var max = parseInt(args[1]);
    }
   
      
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
