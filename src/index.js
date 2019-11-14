// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();

const process = require('./process.json');

const runCommand = require("./runCommand.js");

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
    const args = message.content.slice(process.env.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const taggedUser = message.mentions.users.first();
    const avatarList = message.mentions.users.map(user => {
        return `${taggedUser}'s avatar: <${user.displayAvatarURL}>`;
    });
    runCommand(client, message, args, command, taggedUser, avatarList);
});

// login to Discord with app's token
client.login(process.env.token);