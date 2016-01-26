
var SlackBot = require('slackbots');
 
var bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'Choices'
});
 
bot.on('start', function() {
    var params = {
        icon_emoji: ':cat:'
    };
    
    bot.postMessageToChannel('general', 'meow!', params);
    
    bot.postMessageToUser('cornelius', 'meow!', params); 
});