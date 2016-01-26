
var SlackBot = require('slackbots');
 
var bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'BB-8'
});
 
bot.on('start', function() {
    var params = {
        icon_emoji: ':bb8:'
    };
    
	bot.on('message', function(data) {
		if(data.text && data.subtype != "bot_message") {
			bot.postMessageToChannel('general', 'Bleep Blip Bleep', params);
		}
	});
});
