// REQUIREMENTS //
var express = require('express'),
	app = express(),
    Twit = require('twit'),
    pug = require('pug'),
    fs = require("fs"),
    config = require('./config');

// GLOBAL VARIABLES //
var T = new Twit(config);
var markovStrings = [];
var exportPath = "public/js/tweets.js";
var twitterHandle = 'mossy_toes';
var userName = '✨Another Rando✨';
var params = {
    screen_name: twitterHandle,
    lang: 'en',
    include_rts: false,
    count: 1000
}

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {
        twitterHandle: twitterHandle,
        profileIMG: 'http://pbs.twimg.com/profile_images/856674741305753600/PLO0f0Lt_normal.jpg',
        userName: userName
    })
    res.sendFile(__dirname + '/views/index.html');
});

// serve js & css files
app.use("/static", express.static("public"));

// GET REQUEST //
T.get('statuses/user_timeline', params, gotUserTweets);

// FUNCTION //
function gotUserTweets(err, data, response) {
    // put all tweets into array
    for (var i = 0; i < data.length; i++) {
        var removeMentionsAndLinks = data[i].text.replace(/(@[^ ]+|http[s]?:\/\/[^ ]+)/g, "")
        // TODO: take out all:
            // parenthesis
            // in-tweet quotations
            // extra long tweet words ending with '…'
        var trimmedTweet = removeMentionsAndLinks.trim();

        if (trimmedTweet != '') {
            markovStrings.push(trimmedTweet);
        }
    }
    fs.writeFile(exportPath, JSON.stringify(markovStrings), function(error) {
        if (error) {
            console.error("write error:  " + error.message);
        } else {
            console.log("Successful Write to " + exportPath);
        }
    });
};

// CONNECTED SERVER //
app.listen(process.env.PORT || 3001, function (){
  console.log("Server Connected to http://localhost:3001/");
});