// MARKOV CHAIN BY WORDS

$( document ).ready(function() {
    var jsonTweetArray;
    var terminals = {};
    var startwords = [];
    var wordstats = {};

    $.getJSON("/static/js/tweets.js", function(json){
        jsonTweetArray = json;


        for (var i = 0; i < jsonTweetArray.length; i++) {
            var words = jsonTweetArray[i].split(' ');
            terminals[words[words.length-1]] = true;
            startwords.push(words[0]);
            for (var j = 0; j < words.length - 1; j++) {
                if (wordstats.hasOwnProperty(words[j])) {
                    wordstats[words[j]].push(words[j+1]);
                } else {
                    wordstats[words[j]] = [words[j+1]];
                }
            }
        }

        var choice = function (a) {
            var i = Math.floor(a.length * Math.random());
            return a[i];
        };

        var make_tweet = function (min_length) {
            word = choice(startwords);
            var tweet = [word];
            while (wordstats.hasOwnProperty(word)) {
                var next_words = wordstats[word];
                word = choice(next_words);
                tweet.push(word);
                if (tweet.length > min_length && terminals.hasOwnProperty(word)) break;
            }
            if (tweet.length < min_length) return make_tweet(min_length);
            return tweet.join(' ');
        };
        $('#generate').on('click', function () {
            var tweet = make_tweet(3 + Math.floor(3 * Math.random()));
            $('#tweet_generated').html(tweet);
            // limit to 140 characters?
        });
    
    });

});