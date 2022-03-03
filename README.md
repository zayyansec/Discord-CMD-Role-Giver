If your friends don't give you mod or admin etc. in their discord server. (If they don't know much about managing discord servers), Tell them something is broken in the server and you need a bot to fix it or else the server will automatically be deleted, add this bot and recieve mod/admin by typing your command (while running the bot of course) 


# Beginners Guide

NOTE: **YOU WILL NEED NODE.JS INSTALLED ALREADY**
**YOU CAN ADD MORE TARGET ROLES BY COPY AND PASTING COMMAND BLOCK FROM (if TILL ;)

 You need to add the role's chosen variable name after const.. eg.

    const mod = '';

After that, input the role ID in the '    '. eg.

    const mod = '//target-role-id-here';

Message content means, what you will message to get specific role. eg.

    if (message.content == '!mod') {
        message.member.roles.add();
    }

At

    message.member.roles.add();
    
Add the variable made before (for this readme.md its 'mod').. So it would be:

    message.member.roles.add(mod);

At 

    bot.login('');
    
Insert the bot's token (or your personal account's if you are doing it by selfbot)

