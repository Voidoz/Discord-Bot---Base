const comm = require('./commandsList.js');

module.exports = {
    commands: `**Useless Commands**\`\`\`
${comm.beep}
${comm.kick}\`\`\`
    
**Info Commands**\`\`\`
${comm.argsInfo}
${comm.avatar}
${comm.help}
${comm.ping}
${comm.server}
${comm.userInfo}\`\`\`
`,
};