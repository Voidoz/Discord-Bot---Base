/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
    if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to kick them!');
    }

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
};