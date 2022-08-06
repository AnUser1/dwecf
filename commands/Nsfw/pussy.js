const { MessageEmbed } = require('discord.js')
const akaneko = require("akaneko")

exports.run = async (client, message, args, guildData, lang) => {
  
if (message.channel.nsfw === true) { 
  const embed = new MessageEmbed()
            .setImage(await akaneko.nsfw.pussy())
            .setColor('RANDOM')  
        message.channel.send(embed)
  } else {
    message.channel.send("Включите NSFW канал") 
   }
 }