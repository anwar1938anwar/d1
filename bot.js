const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("629291167305170944")
setInterval(function() {
channel.send(`d`);
}, 30)
})

client.login(process.env.BOT_TOKEN);