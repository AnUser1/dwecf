const { MessageEmbed } = require("discord.js");

module.exports = async (client, guild) => {
	const text = `Вышел с сервера!\n\n> Название сервера: **${guild.name}**\n> Айди: **${guild.id}**\n> Айди Владельца: **${guild.ownerID}**`;
	const logsEmbed = new MessageEmbed()
		.setAuthor(guild.name, guild.iconURL({ dynamic: true }))
		.setColor("RED")
		.setDescription(text);
	client.channels.cache.get(client.config.auth.logs).send(logsEmbed);
};