var secret = require('./secret')
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: secret.consumer_key,
  consumer_secret: secret.consumer_secret,
  access_token_key: secret.access_token_key,
  access_token_secret: secret.access_token_secret
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log('GET TWEETS HERE');
    console.log(tweets);
  }
});

client.post('statuses/update', {status: 'SO MUCH IN FACT - CATS'},  function(error, tweet, response) {
  if(error) throw error;
  console.log('TWEET');
  console.log(tweet);  // Tweet body.
  console.log('RESPONSE!!!!');
  console.log(response);  // Raw response object.
});
