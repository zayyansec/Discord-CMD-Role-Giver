const Discord = require('discord.js');

const mod = 'target-role-id-here';

bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == '!mod') {
        message.member.roles.add(mod);
    }
    

});

bot.login('your-bot-token-here');

// template at https://github.com/G405T/Discord-CMD-Role-Giver

// made by G405T