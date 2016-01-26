
var SlackBot = require('slackbots');
var giphy = require('giphy-api')();


var bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'BB-8'
});
 
bot.on('start', function() {

	var params = { icon_emoji: ':bb8:'}

	bot.on('message', function(data) {

		if (data.text) {
			if(data.text.substring(0, 1) == "!") {

				var search = data.text.substring(1, data.text.length);

				giphy.search(search, function(err, res) {
					var giphyDataLength = res.data.length;

					if(giphyDataLength != 0) {

						var giphyDataLength = res.data.length;
						var randomNumber = Math.floor(Math.random() * giphyDataLength);
						var giphyData = res.data[randomNumber].images.fixed_height_downsampled.url;
	    				params.attachments = [{ "fallback": "Bla", "title": search, "image_url": giphyData}];
					    bot.postMessageToChannel("general","",params);
					} else {
						delete params.attachments;
						bot.postMessageToChannel("general","Couldn't roll fast enough to catch your " + search + " gif", params);

					}
				});
			}
		}
	});
});