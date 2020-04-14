const Discord = require('discord.js');
const Profile = require("../Game/profile.js");

module.exports.run = async (bot, message, args) => {
	const author = message.author.id
  	message.delete().catch(e => require("../utils/error.js").error(bot, e));
    let embed = new Discord.RichEmbed()
        .setAuthor('Rain -', message.author.avatarURL)
        .setTitle("Create a new Profile")
        .setDescription("Loading your new world...")
        .setThumbnail("https://cdn.discordapp.com/avatars/417450858024796161/0e4870e7a97dff4a12333eb4d2822ddf.png")
        .setColor("#1bade2")
        .addField("Rain Version - ", "1.0")
        .addField("Rain Bot - ", "A text based multiplayer rpg inside a discord bot!")
        .addField("Rain Discord Server - ", "[Click to join](https://discord.gg/wEBffs), Stay up-to-date with all the updates to Rain!")
    message.channel.send({embed: embed}).then(message => {
		new Profile(author)
        message.delete(60000);
    }).catch(e => require("../utils/error.js").error(bot, e));
}

module.exports.help = {
    name: "createprofile",
    description:"Create a new Rain Profile!",
    category: ""
}