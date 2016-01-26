var Slackbot = require('slackbot')

var slackbot = new Slackbot(process.env.SLACK_TEAM, process.env.SLACK_TOKEN);

slackbot.send("#general", "hello!!", function(err, res, body) {
  if(err){
    console.error(err);
    return;
  }
  console.log(body);
});