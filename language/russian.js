/* eslint-disable no-unused-vars */
//russian
const { prefix, owner } = require("../config.js"),
	emojis = require("../emojis.json"),
	e = emojis;

module.exports = {
  chance: {
    name: "[Добавить Бота](https://discord.com/api/oauth2/authorize?client_id=1005100080312893560&permissions=8&scope=bot) | Добавьте бота и получите шанс на победу +10%"
  },
  footer: {
    name: "Lonffy | Многофункциональный бот"
  },
	start: {
		perms: `${e.error} У вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create и т.д\`!`,
		duration: `${e.error} Введите корректное значение \`времени\`!\n> Например: \`1d (1 день)\`, \`1h (1 час)\`, \`1m (1 минута)\`, \`1s (1 секунда)\`!`,
		argswinners: `${e.error} Введите корректное значение \`кол-ва победителей\`!\n> Например: \`${prefix}start 1h 4(Кол-во победителей) Nitro\``,
		prize: `${e.error} Добавьте к розыгрышу \`приз\`!\n> Например: ${prefix}start 1h 1 \`Nitro(Ваш приз)\``
	},

	create: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create и т.д\`!`,
		channel: `${e.error} Вы должны указать \`канал\`!\n> Например: ${prefix}create \`#channel (Канал для розыгрыша)\` 1h 1 Nitro!`,
		otherServer: `${e.error} Вы не можете создать \`розыгрыши\` на других серверах!`,
		duration: `${e.error} Укажите корректное \`время\`!\n> Например: \`1d (1 день)\`, \`1h (1 час)\`, \`1m (1 минута)\`, \`1s (1 секунда)\`!`,
		argswinners: `${e.error} Укажите \`кол-во победителей\`!\n> Например: \`${prefix}create #channel 1h 4(Кол-во победителей) Nitro\``,
		prize: `${e.error} Добавьте \`приз\`!\n> Например: ${prefix}create #channel 1h 1 \`Nitro(Ваш приз)\``,
		good: `${e.success} ** Я запустил \` розыгрыш \` в указанном чате: **`,

		giveaway: `${e.gift} **НАЧАЛАСЯ РОЗЫГРЫШ** ${e.gift}`,
		giveawayEnded: `${e.end} **РОЗЫГРЫШ ЗАКОНИЛСЯ** ${e.end}`,

		timeRemaining: `${e.time} **Конец через:** **{duration}**!`,
		inviteToParticipate: (message) => "Нажми на 🎉 для участия в раздаче",
		winMessage: (message) => "{winners}\nПоздравляю, вы выйграли: **{prize}**!",
		embedFooter: "Lonffy | Многофункциональный бот",
		noWinner: "Розыгрыш был отменён, недостаточно участников!",
		hostedBy: `${e.hoste} **Спонсор:** {user}`,
		winners: "Победитель(ей) 🎉",
		endedAt: "Закончился в",
	},

	units: {
		seconds: "секунд(ы)",
		minutes: "минут(ы)",
		hours: "час(ов)",
		days: "день(ей)",
	},

	lastchance: { content: `${e.warning} **Осталось не много времени!** ${e.warning}` },

	end: {
		perms: `${e.error} | У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & end и т.д\`!`,
		msg: `${e.error} | Вам необходимо указать корректный ID сообщения с розыгрышем.`,
		err: `${e.error} | Ошибка при получении данных розыграша: `,
		errmod: `${e.error} | Данный розыгрыш окочен или удалён!`,
		good: `Розыгрыш будет окончен через:`
	},

	reroll: {
		perms: `${e.error} | У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & reroll и т.д\`!`,
		msg: `${e.error} | Вам необходимо указать корректный ID сообщения с розыгрышем.`,
		err: `${e.error} | Ошибка при получении данных розыграша: `,
		good: ":tada: Новый(е) победитель(и): {winners}!",
		parts: `${e.error} | Недостаточно участников в розыгрыше, чтобы выбирать новых победителей!`
	},

	edit: {
		perms: `${e.error} | У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit и т.д\`!`,
		msg: `${e.error} | Вам необходимо указать корректный ID сообщения с розыгрышем.`,
		wipr: `${e.error} | Вам необходимо указать кол-во победителей!`,
		argswinners: `${e.error} | Укажите \`кол-во победителей\`!\n> Например: \`${prefix}edit {giveawayid} winners 2(Кол-во победителей)\``,
		prize: `${e.error} | Добавьте \`приз\`!\n> Например: ${prefix}edit {giveawayid} prize \`Nitro (Ваш приз)\``,
		timepr: (numberOfSecondsMax)=> `Приз розыгрыша будет обновлён через \`${numberOfSecondsMax}\` секунд.`,
		timwi: (numberOfSecondsMax)=> `Кол-во победителей будет обновлено через \`${numberOfSecondsMax}\` секунд.`,
		err: `${e.error} | Ошибка при получении данных розыгрыша: `,
		errmod: `${e.error} | Ничего не найдено по данному ID. Возможно данный розыгрыш завершён или был удалён.`
	},

	delete: {
		done: `Розыгрыш был успешно удалён!`,
		otherServer: `${e.error} | Вы не можете управлять данным \`розыгрышем\` на этом сервере!`,
		otherUser: `${e.error} | Вы не можете управлять данным \`розыгрышем\`, т.к вы не **Спонсор** данного розыгрыша!`
	},

	lang: {
		perms: `${e.error} | У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`language\`!`,
		msg: `${e.error} | Введите корректный язык! Список доступных языков - (\`ru\`)`,
	},

	set: {
		args: `${e.error} | Введите \`on\` или \`off\``,
		mon: `${e.success} | setmention команда успешно активирована!`,
		moff: `${e.success} | setmention команда успешно отключена!`,
		rlargs: `${e.error} | Введите \`on\`, \`off\` или роль!`,
		rlerr: `${e.error} | Роль с указанным названием не найдена!`,
		ron: `${e.success} | Теперь у данной роли будет доступ к команде розыгрыша!`,
		roff: `${e.success} | Роль менеджера была успешно убрана!`
	},

	invite: {
		main: "Ссылки Lonffy",
    name: "Открыть",
		disc: `Ссылка на приглашение: \`${prefix}invite bot\``,
		web: `Сайт: `,
		inv: `Пригласить бота: `,
		vote:`Проголосовать за бота: `,
		sup: `Сервер поддержки: `
	},

	help: {
		title: "Справочник по боту:",
		disc: "Здесь находятся все команды **Lonffy**",
		giveawaycmd: `${e.givcmd} Команды для проведения розыгрышей - (6)`,
		featuredcmd: `${e.featured} Команды для настройки бота - (4)`,
		infocmd: `${e.info} Информационные команды - (4)`
	},

	stats: {
		title: "Немного о боте:",
		info: `**Lonffy** - Это бот который позволяет с легкостью создавать розыгрыши и предоставляет множество различных функций.`,
		stats: `__Статистика:__`,
		stat: "`Серверов:` ",
		set: "`Участников:` ",
		on: "`В сети уже` ",
  },

	prefixerror: `${e.error} Введите корректный префикс!`,
	prefixerrcarc: `${e.error} | Префикс не может быть больше 5-ти символов!`,
	setprefix: `${e.success} Префикс был изменён на `,

	info: {
		ping: `> Мой пинг:`,
	},
	
	cooldown: {
		err: `**Вы должны подождать для повторного использования команды!**`
	},
	
	myprefix: {
		hello: `Привет!`,
		prefixis: (guildData) => `Мой префикс: \`${guildData.prefix}\`.\nЧто-бы посмотреть список команд, напишите \`${guildData.prefix}help\``,
	},
	
	blacklist: {
		blacklist: `🔒 **Вы не можете использовать команды бота, т.к ваш сервер был добавлён в чёрный список!**`
	}
};
