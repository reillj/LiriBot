const Twitter = require('twitter');
const Spotify = require('node-spotify-api');

var client = new Twitter({
    consumer_key: 'kbM1rNG4Dv08PYImuk6amOwkN',
    consumer_secret: 'uQFZ51FgdhuAUW3LboMUyuhZd5K4pq2K8N81Q9QBiguMuiB036',
    access_token_key: '915715845527027712-GHfTrgY8qRaxDJHGMdXWK1ZPThBFjpD',
    access_token_secret: 'PxKn74T3NzsOusV6C1C6bRWQdHOjjeg5Yhqkl6k4VM8SL',
});
 
var spotify = new Spotify({
  id: '8d98b176e5e84912bbc06ff6c0c61b0f',
  secret: '47822025bd7e4d3ca6ef69f768c1f24e',
});

//export keys so they can be used elsewhere
module.exports.client = client;
module.exports.spotify = spotify;