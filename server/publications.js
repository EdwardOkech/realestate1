Meteor.publish('cities', function(){
    return Cities.find();
});

Meteor.publish('properties', function(){
    return Properties.find({_id:propertyId});
});
