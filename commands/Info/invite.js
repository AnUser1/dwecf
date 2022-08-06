const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args, guildData, lang) => {
	const inviteLink = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`;
	const voteURL = `**Скоро**`;
	const supportURL = client.config.auth.support;
	if (args[0] == "bot")return message.channel.send(inviteLink);

	message.channel.send(new MessageEmbed()
		.setAuthor(lang.invite.main)
		.setDescription(lang.invite.disc)
		.addField(lang.invite.inv, (`[${lang.invite.name}](${inviteLink})`))
		.addField(lang.invite.sup, (`[${lang.invite.name}](${supportURL})`))
		.setColor(client.config.embeds.color)
		.setFooter(lang.footer.name));

};
