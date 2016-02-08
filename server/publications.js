Meteor.publish('cities', function(){
    return Cities.find();
});


//Grid view properties - front page
Meteor.publish('grid-view', function(){
    return Properties.find({}, {
        limit: 8,
    });
});

Meteor.publish('acheter', function(acheter){
    return Properties.find({acheter:acheter})
});

Meteor.publish('louer', function(louer){
    return Properties.find({louer:louer})
});

Meteor.publish('single-property', function(_id){
    return Properties.find({_id:_id})
});


Meteor.publish('tweets', function(){
    return Tweets.find();
});

Meteor.publish('editorRoles', function(){
    if(this.userId){
        return Meteor.users.find({_id: this.userId}, {fields: {roles: 1}});
    } else {
        this.ready();
    }
});

Meteor.publish('propertiesForUser', function(){
    userId = this.userId(),
        currentUserProperties = Properties.find({"owner": userId});
    if(currentUserProperties){
        return currentUserProperties;
    }
    this.ready();
})
