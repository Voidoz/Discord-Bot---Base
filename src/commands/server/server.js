/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
};