var Slackbot = require('slackbot')

var slackbot = new Slackbot('inrichtigkeit', 'xoxb-19505835703-QZaaLysknNvRKQpLLiP7DCLC');

<<<<<<< HEAD
slackbot.send("#general", "hello!!", function(err, res, body) {
  	if(err) return;
  	console.log(body);
});
=======
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });


// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});

// BOT Post
app.post('/hello', hellobot);
>>>>>>> FETCH_HEAD
