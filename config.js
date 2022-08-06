module.exports = {
/* The token of your Discord Bot // توكن البوت الخاص فيك */
	token: "MTAwNTEwMDA4MDMxMjg5MzU2MA.GnLKH1.BwfvFVPQ3-8Uq3AZMMW7qB8v_ECBKWEsZTo_dk",
	/* for the support server // رابط سيرفر الدعم الخاص فيك */
	auth: {
		support: "https://discord.gg/qhwKR3Kp7a", // URL for support server
		logs: "1005109100989911061", // id of the logs channel on your server if the bot join new server
	},
	mongoDB: "mongodb+srv://lonffy:userlonffy@cluster0.hhymyd4.mongodb.net/?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "l.", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embeds: {
		color: "RANDOM", // Embed color | لون الامبد
	},
	/* Bot's owner informations */
	owner: {
		id: "765106818140995611", // The ID of the bot's owner
		name: "New#2222" // The ID of the bot's owner
	},
	/* The Bot status */
	status: [
		{
			name: "l.help",
			type: "WATCHING"
		},
	],
	/* Default lang | اللغة الاساسية */
	basiclang: "russian",
	/* Giveaway settings */
	giveaway: {
		hostedBy: true, // Why hosted gift | لماذا استضافت الهدية
		reaction: "🎉", // Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord | الايموجي الي بس تضغط عليها يصير القيف اوي اذا طلع لك ايرور بالكونسول يعني الايموجي ما تعرف بالديسكورد
		grole: "Giveaway Manager", // If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here | اذا سويت الرتبة واعطيتها لحد يصير يقدر يسوي قيف اوي ويستخدم جميع اوامر البوت بدون صلاحيات
		lastchanceenabled: false,
	},
	//logs for cmd bot
	logs: {
		command: "1005115174409207861" //log To see who uses bot commands
	}
};