var Slackbot = require('slackbot')

var slackbot = new Slackbot('inrichtigkeit', 'xoxb-19505835703-QZaaLysknNvRKQpLLiP7DCLC');

slackbot.send("#general", "hello!!", function(err, res, body) {
  	if(err) return;
  	console.log(body);
});