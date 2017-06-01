console.log("Tweets being gathered...");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

console.log("Tweets gathered!")

