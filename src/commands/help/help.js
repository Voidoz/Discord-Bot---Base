const help = require("./helpOutput.js");

/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
        message.channel.send(`Commands requested by ${message.author}:\n${help.commands}`);
};