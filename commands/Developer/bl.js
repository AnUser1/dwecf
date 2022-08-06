/* eslint-disable no-unused-vars */
const blacklistUser = require("../../Base/User"),
	blacklistGuild = require("../../Base/Guild");

exports.run = async (client, message, args, guildData, lang) => {
	if (message.author.id !== client.config.owner.id) return message.channel.send("Данная команда вам не доступна");
	const type = args[0];
	if (type !== "user" && type !== "guild") {
		return message.channel.send("Выберите **user** или **guild**");
	}
	if (type === "user") {
		const User = message.guild.members.cache.get(args[1]);
		if (!User) return message.channel.send("Укажите пользователя правильно");

		blacklistUser.findOne({ id: User.user.id }, async (err, userData) => {
			if (err) throw err;
			if (userData) {
        message.channel.send(`**${User.displayName}** уже находится в чс`);
			} else {
				userData = new blacklistUser({ id: User.user.id });
				userData.save()
					.catch(err => console.log(err));
      message.channel.send(`**${User.user.tag}** был добавлен в чс`)
        User.ban({ reason: `${lang.blacklist.banmessage}` })
        User.send({ content: `${Guild.name}${lang.blacklist.userbanmessage}`})
			}
		});
  }
	if (type === "guild") {
		const Guild = message.client.guilds.cache.get(args[1]);
		if (!Guild) return message.channel.send("Укажите сервер правильно");
		blacklistGuild.findOne({ id: Guild.id }, async (err, guildData) => {
			if (err) throw err;
			if (guildData) {
				message.channel.send(`**${Guild.name}** уже находится в чс`);
			} else {
				guildData = new blacklistGuild({ id: Guild.id });
				guildData.save()
					.catch(err => console.log(err));
				message.channel.send(`**${Guild.name}** был добавлен в чс`);
			}
		});
    Guild.leave();
		Guild.owner.send(`Ваш сервер **${Guild.name}** был добавлен в чс. Что-бы узнать причину, можете написать в поддержку: https://discord.gg/qhwKR3Kp7a`);
	}
};