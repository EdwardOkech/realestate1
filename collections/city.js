Cities = new Mongo.Collection('cities');

Schemas.City = new SimpleSchema({
    name:{
        type: String,
        label: "Name",
         optional: false
    },
    latitude: {
        type: Number,
        label: "lat",
        optional: false
    },
    longitude:{
        type: Number,
        label: "lon",
        optional: false
    }
});

Cities.attachSchema(Schemas.City);

// validation objects

Cities.insert({"name": "Casablanca", "latitude": 33.573110, "longitude": -7.589843},
    function(error, result){

});
