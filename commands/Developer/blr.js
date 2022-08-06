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
	const User = message.guild.members.cache.get(args[0]);
	if (!User) return message.channel.send("Укажите пользователя правильно");

	blacklistUser.findOne({ id: User.user.id }, async (err, userData) => {
		if (err) throw err;
		if (userData) {
			await blacklistUser.findOneAndDelete({ id: User.user.id })
				.catch(err => console.log(err));
			message.channel.send(`**${User.displayName}** был убран с чс`);
		} else {
			message.channel.send(`**${User.user.tag}** не находится в чс`);
		}
	});
};
  if (type === "guild") {
    const Guild = message.client.guilds.cache.get(args[1]);
		if (!Guild) return message.channel.send("Укажите сервер правильно");
    blacklistGuild.findOne({ id: Guild.id }, async (err, guildData) => {
			if (err) throw err;
			if (guildData) {
        await blacklistGuild.findOneAndDelete({ id: Guild.id })
          .catch(err => console.log(err));
        
				message.channel.send(`**${Guild.name}** был убран с чс`);
			} else {
        message.channel.send(`**${Guild.name}** не находится в чс`)
      }
    });
  };
		Guild.owner.send(`Ваш сервер **${Guild.name}** был убран с чс.`);
	}