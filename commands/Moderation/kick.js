const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args, guildData, lang) => {

if(message.member.hasPermission("KICK_MEMBERS")) {
  
      if (!message.mentions.members.first()) return message.channel.send("Укажите пользователя");
			
      const user = message.mentions.members.first();
			const reason =  args[1] ? args.slice(1).join(" ") : "Не указана"

			let rankUser = user.roles.highest.position;
			let rankAuthor = message.member.roles.highest.position;
			let rankBot = message.guild.member(client.user).roles.highest.position;

			if(rankUser >= rankAuthor) return message.reply(`Вы не можете кикнуть ${user.user.username}`);
			if(rankUser >= rankBot)    return message.reply(`Не удалось кикнуть ${user.user.username}`);	

			user.kick(reason)
				.then( async () => {
					let embed = new Discord.MessageEmbed()
						.setColor('GREEN')
						.setDescription(`${user} был кикнут\nПричина: ${ reason }`)
                        .setTimestamp();
					await message.channel.send(embed);
				});

    } else {
      message.channel.send(`Вам нужно право **Kick Members**`)
    }
}