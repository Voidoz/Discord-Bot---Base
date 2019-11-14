const process = require("./process.json");

module.exports = function(client, message, args, command, taggedUser, avatarList) {

    if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;

    try {
        // Expecting error here
        const cmd = require(`./commands/${command}/${command}.js`);

        // Running this if there is no error
        cmd(client, message, args, command, taggedUser, avatarList);
    }
    catch (e) {
        // Run this if there is an error
        console.log(`------------------------------------------------------------------------------\nThere was an error with a users command. Here is the error:\n\n${e}\n\n------------------------------------------------------------------------------`);
        message.channel.send("There was an error with that command!");
    }
};