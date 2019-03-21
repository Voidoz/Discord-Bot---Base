// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// const { prefix, token } = require('./config.json');

const commandList = require('./commands.json');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');

    // Status: Playing
    client.user.setActivity('^help');

    // Status: Watching
    // client.user.setActivity('YouTube', {type: "WATCHING"});

    // Status: Streaming
    // client.user.setActivity('Twitch', {type: "STREAMING"});
});

// this code is run when the bot detects an incoming message
client.on('message', message => {
    if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;

    const args = message.content.slice(process.env.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(`${process.env.prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${process.env.prefix}beep`)) {
        message.channel.send('Boop.');
    } else if (message.content === `${process.env.prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${process.env.prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
    } else if (message.content === `${process.env.prefix}help`) {
        message.channel.send(`Commands requested by ${message.author}:\n${commandList.commands}\n\n\nPlease note that this version of the bot is case sensetive for the command itself. For example you wrote "^ArGs-InFo HeLlO wOrLd" it would not output anything because "^args-info" includes caps. If you wrote "^args-info HeLlO wOrLd" it would reply with your argument info because "^args-info" does not include caps.`);
    }
});

// login to Discord with app's token
client.login(process.env.token);