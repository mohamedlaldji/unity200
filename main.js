const Discord = require('discord.js')
const client = new Discord.Client();
// توكن البوت
var token = "NzcwNDI2MzYxMTc2MzkxNjkx.X5dZdg.4Yvh3ef57cqlT5p02DS5kC1b6C4";
// الاختصار المستخدم في الاوامر
const prefix = "*";
// نشاط البوت
var activity = prefix + "Unity System";
// حالة البوت
var status = "Online";
/**
* @param {Discord.Message} message The received message
*/
async function onMessage(message)
{
	try
	{
		if (message.content.startsWith(prefix))
		{
			var arg_index = message.content.indexOf(' ');
			var command = message.content.slice(prefix.length);
			if(arg_index > 0) // != -1
				command = command.substr(0, arg_index - 1);
			const text = message.content.substr(arg_index + 1);
			switch(command)
			{
				case "help":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.author.send("```msgall```");
						message.reply("Ay sir! I DMed you with my current abilities.");
					}
					else
					{
						message.reply("Help coming right away...");
						message.author.send().catch(() =>
						{
							message.reply("I couldn't send a direct message to you.. so I'll send you help here.")
							message.channel.areply("I couldn't send a direct message to you.. so I'll send you help here.")
						});
					}
				break;
				case "msgall":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.reply('Unity serveur');
						let members = await message.guild.members.fetch();
						var sentsuccess = 0;
						var bots = 0;
						var msg = "";
						members.forEach(member =>
						{
							try
							{
								if(!member.user.bot)
								{
									++sentsuccess;
									member.send(text).catch(() =>
									{
										//console.log("Couldn't send message to " + member.displayName);
										//msg += member.displayName;
										//message.channel.send(member.displayName);
										--sentsuccess;
									})(sentsuccess);
								}
								else
									++bots;
							}catch(exception)
							{
								console.log(exception);
							}
						});
						message.channel.send("Done, sir. Sent " + sentsuccess + "/" + (message.guild.memberCount - bots) + ".");
					}
					else
					{
						message.reply("Sorry, you're not allowed to command me that.");
					}
				break;
				case 'pageT':
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.author.send("```https://www.facebook.com/TerSho-GaminG-106870354081722/ ```");
						message.reply("FB: Tersho : <https://www.facebook.com/TerSho-GaminG-106870354081722/> https://cdn.discordapp.com/attachments/759911697829330954/770371127897227314/Tersho2.png");
					}
					else
					{
						message.reply("Help coming right away...");
						message.author.send().catch(() =>
						{
							message.reply("I couldn't send a direct message to you.. so I'll send you help here.")
							message.channel.areply("I couldn't send a direct message to you.. so I'll send you help here.")
						});
					}
				break;
                                case 'page':
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.author.send("```https://www.facebook.com/Unity0fgamers ```");
						message.reply(FB UNITY CLAN: <https://www.facebook.com/Unity0fgamers> https://media.discordapp.net/attachments/759911697829330954/763841906584715264/Banner1.png?width=1120&height=560");
					}
					else
					{
						message.reply("Help coming right away...");
						message.author.send().catch(() =>
						{
							message.reply("I couldn't send a direct message to you.. so I'll send you help here.")
							message.channel.areply("I couldn't send a direct message to you.. so I'll send you help here.")
						});
					}
			}
		}
	}catch(exception)
	{
		console.log("Exception Handled " + exception);
		message.channel.send("**Exception Handled**\n```js" + exception + "```");
	}
}
function onClientReady()
{
	console.log('Ready!');
	// Set the client user's presence
	client.user.setPresence({ activity: { name: activity }, status: status }).then(console.log).catch(console.error);

}
// Events
client.on("message", onMessage);   // On User Sending Message
client.on('ready', onClientReady); // On Bot Start 

// Login
client.login(token);
