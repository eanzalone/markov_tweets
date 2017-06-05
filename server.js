// REQUIREMENTS //
var express = require('express'),
	app = express(),
    Twit = require('twit'),
    config = require('./config');

// GLOBAL VARIABLES //
var T = new Twit(config);
var markovStrings = [];
var markovTweets = [];
var twitterHandle = 'mossy_toes';
var params = {
    screen_name: twitterHandle,
    lang: 'en',
    include_rts: false,
    // exclude_replies: true,
    count: 5
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// serve js & css files
app.use("/static", express.static("public"));

// GET REQUEST //
T.get('statuses/user_timeline', params, gotUserTweets);

// FUNCTIONS //
function gotUserTweets(err, data, response) {
    // put all tweets into array
    for (var i = 0; i < data.length; i++) {
        markovStrings.push(data[i].text);
    }
    // connect all tweets to be a single string for Markov Chain
    var markovString = markovStrings.join(' ');
    // pull out all mentions and links
    markovTweets = markovString.replace(/(@[^ ]+|http[s]?:\/\/[^ ]+)/g, "");

    console.log("inside Function: "+markovTweets);
    return markovTweets;
};
// console.log("after Function: "+markovTweets);






// CONNECTED SERVER //
app.listen(process.env.PORT || 3001, function (){
  console.log("Server Connected to http://localhost:3001/");
});