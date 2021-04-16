const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'simjoin',
  permissions: ['ADMINISTRATOR'],
  category: 'Staff',
  description: 'simulate a new member joining',
  execute: ({ client, message, args }) => {
    if (message.author.id === process.env.BOTOWNERID) {
      client.emit('guildMemberAdd', message.member);
    } else {
      message.channel.send("You don't have the permission to do that.");
    }
  },
});
