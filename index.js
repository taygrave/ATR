var secret = require('./secret')
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: secret.secret.consumer_key,
  consumer_secret: secret.secret.consumer_secret,
  access_token_key: secret.secret.access_token_key,
  access_token_secret: secret.secret.access_token_secret
});

function randomInt(min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log('GET TWEETS HERE');
    // console.log(tweets);
  }
});

var randomIndex = randomInt(0, secret.tweet_roulette.length)

client.post('statuses/update', { status: secret.tweet_roulette[randomIndex].toString() },  function(error, tweet, response) {
  if(error) throw error;
  console.log('TWEET');
  console.log(tweet);  // Tweet body.
  // console.log('RESPONSE!!!!');
  // console.log(response);  // Raw response object.
});
