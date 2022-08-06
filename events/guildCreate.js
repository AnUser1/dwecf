/* eslint-disable no-unused-vars */
const { MessageEmbed } = require("discord.js"),
	blacklistGuild = require("../Base/Guild");

module.exports = async (client, guild, guildData, lang) => {
	// fetch guild
	guild = await guild.fetch();

	blacklistGuild.findOne({ id: guild.id }, async (err, Guild) => {
		if (Guild) {
			guild.owner.send(lang.blacklist.message)
		} else {
			const text = `Зашёл на сервер!\n\n> Название сервера: **${guild.name}**\n> Айди: **${guild.id}**\n> Айди Владельца: **${guild.ownerID}**`;
			const logsEmbed = new MessageEmbed()
				.setAuthor(guild.name, guild.iconURL({ dynamic: true }))
				.setColor("GREEN")
				.setDescription(text);
			client.channels.cache.get(client.config.auth.logs).send(logsEmbed);
		}
	});
};