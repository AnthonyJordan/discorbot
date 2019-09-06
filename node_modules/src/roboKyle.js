const Discord = require('discord.js');
const client = new Discord.Client();

const apiKey = require('./config');
const insult = require('./messaging/insult.js');
const chuckNorris = require('./messaging/chuckNorris.js');

client.on('message', msg => {
    if (msg.content === '!insult') {
        msg.channel.send(insult());
    }
});

client.on('message', msg => {
    if (msg.content === '!shots') {
        msg.channel.send({files: [{
            attachment: './assets/shots.gif',
            name: 'shots.gif'
        }]});
    }
});

client.on('message', msg => {
    if (msg.content === '!chucknorris') {
        chuckNorris().then(fact => {
            msg.channel.send(fact);
            }
        )
    }
});


client.login(apiKey);