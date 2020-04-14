exports.run = (bot, guild) =>
{

  let jlLogs = bot.channels.get("699705421774192831");
  jlLogs.send(`**Joined a new guild! Here is some info**: \n **Guild Name and ID**: ${guild.name} (\`${guild.id}\`) \n **__Owner:__** ${guild.owner.user.tag} (${guild.owner.user.id})
   **__Size:__** ${guild.memberCount}`);

}
