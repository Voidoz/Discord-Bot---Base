/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
    message.channel.send('Pong! ' + Math.round(client.ping) + 'ms!');
};