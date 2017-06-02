console.log("Tweets being gathered...");
// REQUIREMENTS
var Twit = require('twit');
var config = require('./config');

// GLOBAL VARIABLES
var T = new Twit(config);
var twitterHandle = 'cptmidas';
var params = {
    screen_name: twitterHandle,
    lang: 'en',
    // exclude_replies: true,
    count: 5
}

// GET REQUESTS
T.get('statuses/user_timeline', params, gotUserTweets);


// DISPLAY FUNCTIONS
function gotUserTweets(err, data, response) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].created_at);
        console.log(data[i].text);
        console.log('-----------------------------');
    }
};