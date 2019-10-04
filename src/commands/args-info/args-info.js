/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }


    message.channel.send(`Command name: ${command}\nArguments: ${args}\nArgument length: ${args.length}`);
};