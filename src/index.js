// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();

// const { prefix, token } = require('./config.json');

const help = require('./help/helpOutput.js');

const roast = require('./roast/roastRandomiser.js');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');

    // Status: Playing
    client.user.setActivity(`${process.env.prefix}help`);

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

    const taggedUser = message.mentions.users.first();

    const avatarList = message.mentions.users.map(user => {
        return `${taggedUser}'s avatar: <${user.displayAvatarURL}>`;
    });

    switch (command) {
    // Useless Commands
    case 'beep':
        message.channel.send('Boop.');
        break;
    case 'kick':
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        break;
    case 'roast':
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to roast them!');
        }

        message.channel.send(`Hey ${taggedUser}. ${roast()}`);
        break;
    // Info Commands
    case 'args-info':
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }


        message.channel.send(`Command name: ${command}\nArguments: ${args}\nArgument length: ${args.length}`);
        break;
    case 'avatar':
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }


        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
        break;
    case 'help':
        message.channel.send(`Commands requested by ${message.author}:\n${help.commands}`);
        break;
    case 'ping':
        message.channel.send('Pong! ' + Math.round(client.ping) + 'ms!');
        break;
    case 'server':
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        break;
    case 'user-info':
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
        break;
        }
});

// login to Discord with app's token
client.login(process.env.token);