console.log("Tweets being gathered...");
// REQUIREMENTS //
var Twit = require('twit');
var config = require('./config');

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
console.log("before Function: "+markovTweets);

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
// var tweettest = gotUserTweets();
// console.log("tweettest: "+tweettest);
console.log("after Function: "+markovTweets);