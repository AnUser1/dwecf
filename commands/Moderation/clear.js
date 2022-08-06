exports.run = async (client, message, args, guildData, lang) => {
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    let messagecount = parseInt(args[0]);
    if(isNaN(messagecount)) return message.channel.send(lang.message.clear);
    if(messagecount > 100){
      message.channel.send(lang.message.clear)
    }else if(messagecount < 1 ) {
      message.channel.send(lang.message.clear)
    } else {
    } {
      const fetched = await message.channel.messages.fetch({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
    }
  } else {
    return message.channel.send("Вам нужно право \`Manage Messages\`")
  }
}