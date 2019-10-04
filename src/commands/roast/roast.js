const roast = require('./roastRandomiser.js');

/* eslint-disable */
module.exports = function(client, message, args, command, taggedUser, avatarList) {
    if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to roast them!');
    }

    message.channel.send(`Hey ${taggedUser}. ${roast()}`);
};