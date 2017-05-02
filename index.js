const Twitter = require('twitter');
const PushBullet = require('pushbullet');
const Creds = require('./creds.js');
const Config = require('./config.js');

var currentDateTime = new Date();
var startHour = 9; // 9 am
var endHouse = 24; // 12 midnight

// Set Credentials from creds.js
let tw = new Twitter({
    consumer_key: Creds.consumer_key,
    consumer_secret: Creds.consumer_secret,
    access_token_key: Creds.access_token_key,
    access_token_secret: Creds.access_token_secret,
});
let pb = new PushBullet(Creds.pushbulletAccessToken);

// Configure Settings from config.js
let config = {
    stream_ids: Config.stream_ids,
    keywords: Config.keywords
};

// Filter tweets by stream_ids
// Doc: https://dev.twitter.com/streaming/reference/post/statuses/filter
tw.stream('statuses/filter', { follow: config.stream_ids }, function (stream) {

    // Display current date/time on start
    console.log("Pogo Scanner started running " + currentDateTime);

    // On Stream Result
    stream.on('data', function (tweet) {

        // If within allowed timeframe
        if( currentDateTime.getHours() >= startHour && currentDateTime.getHours() <= endHouse ){

            // Loop through keywords
            for (var i = 0; i < config.keywords.length; i++) {

                // Check for match
                var match = tweet.text.toLowerCase().includes( config.keywords[i].toLowerCase() );
                if(match){

                    // Trigger Pushbullet Link
                    pb.link({}, tweet.text, "https://twitter.com/"+tweet.user.screen_name+"/status/"+tweet.id_str, function(error, response) {
                        console.log([
                            tweet.text,
                            "https://twitter.com/"+tweet.user.screen_name+"/status/"+tweet.id_str
                        ]);
                    });

                }
            }

        }

    });

    // On Stream Error
    stream.on('error', function (error) { console.log(error); });

});
