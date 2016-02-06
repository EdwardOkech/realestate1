
if(Meteor.isServer){
    Meteor.startup(function(){
        var Twit = Meteor.npmRequire('twit');
        var conf = JSON.parse(Assets.getText('twitter.json'));

        var T = new Twit({
            consumer_key: '2ORbAOXz0kTDqIsYAi4N7da6G',
            consumer_secret: '5xJMN0RTBSsj2L2jKgNmYa6ufL4cGi9uz7f3YUAwBSqXwhUEMN',
            access_token: '51443124-7AMzTiaROoA2QtRQ7ZC4LrXKfdvUr4pAFmkqGQ4cJ',
            access_token_secret: 'bwrYOkz3ic4SUtep3PvgcqwfGCSYTyriogtk8STpw9jEw'
        });

        var stream = T.stream('statuses/filter', {
            track: conf.keyword
        });
       stream.on('tweet', Meteor.bindEnvironment(function(tweet){
           console.log(tweet);
           Tweets.insert(tweet);
       }))
    });
}