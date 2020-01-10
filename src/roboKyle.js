const Discord = require('discord.js');
const client = new Discord.Client();

const apiKey = require('./config');
const insult = require('./messaging/insult.js');
const chuckNorris = require('./messaging/chuckNorris.js');
const games = require('./games.js');

client.on('message', msg => {
    if (msg.content === '!insult') {
        msg.channel.send(insult());
    } else if (msg.content === '!shots') {
        msg.channel.send({files: [{
                attachment: './assets/shots.gif',
                name: 'shots.gif'
            }]});
    } else if (msg.content === '!chucknorris') {
        chuckNorris().then(fact => {
                msg.channel.send(fact);
            }
        )
    }
});

// client.on('message', msg => {
//     if (msg.content === '!shots') {
//         msg.channel.send({files: [{
//             attachment: './assets/shots.gif',
//             name: 'shots.gif'
//         }]});
//     }
// });
//
// client.on('message', msg => {
//     if (msg.content === '!chucknorris') {
//         chuckNorris().then(fact => {
//             msg.channel.send(fact);
//             }
//         )
//     }
// });

client.on('ready', () => {
    client.user.setPresence({game: {name: 'Dream Daddy'}})
        .catch(console.error);
    setInterval( () => {
        client.user.setPresence({game: {name: games()}})
            .catch(console.error)}, 1800000)
});

client.login(apiKey);