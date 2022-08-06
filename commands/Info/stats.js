const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args, guildData, lang) => {
	const version = require("../../package.json").version;
	const discord_giveaways = require("../../package.json").dependencies["discord-giveaways"];
	const supportURL = client.config.auth.support;
	const invite = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`;
	const duration = moment.duration(client.uptime).format(`D [${lang.units.days}], H [${lang.units.hours}], m [${lang.units.minutes}], s [${lang.units.seconds}]`);
	message.channel.send(new MessageEmbed()
		.setTitle(lang.stats.title)
		.setDescription(lang.stats.info)
		.addField(lang.stats.stats, lang.stats.stat + message.client.guilds.cache.size + "\n" + lang.stats.set + message.client.users.cache.size + "\n\n" + lang.stats.on + `${duration}`)
		.setColor(client.config.embeds.color)
		.setFooter(lang.footer.name));
};
