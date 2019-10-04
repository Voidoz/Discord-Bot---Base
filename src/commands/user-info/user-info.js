/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
};