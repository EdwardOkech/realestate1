//
//if(Meteor.isServer){
//    Meteor.startup(function(){
//        var Twit = Meteor.npmRequire('twit');
//        var conf = JSON.parse(Assets.getText('twitter.json'));
//
//        var T = new Twit({
//            consumer_key: conf.consumer.key,
//            consumer_secret: conf.consumer.secret,
//            access_token: conf.access_token.key,
//            access_token_secret: conf.access_token_secret.secret
//
//            
//        });
//
//        var stream = T.stream('statuses/filter', {track: conf.keyword});
//
//       stream.on('tweet', Meteor.bindEnvironment(function(tweet){
//           console.log(tweet);
//           Tweets.insert(tweet);
//       }))
//    });
//}