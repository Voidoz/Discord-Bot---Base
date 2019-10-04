module.exports = function(message) {
    if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;
};
