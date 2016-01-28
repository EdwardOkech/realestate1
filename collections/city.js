Cities = new Mongo.Collection('cities');

Schemas.City = new SimpleSchema({
    name:{
        type: String,
        label: "Name",
         optional: false
    },
    geopoint: {
    type: [Number],
    decimal: true,
    optional: true
  }
});

Cities.attachSchema(Schemas.City);

if(Cities.find().count() === 0){
    console.log('Importing private/cities.json to db');

    Assets.getText('cities.json', function(err, data){
        var data = JSON.parse(data);

        for(city in data){
            console.log('inserting', city);
            Cities.insert({name: city, geopoint: data[city]});
        }
    });
}

// validation objects

Cities.insert(
    {
       // "name": "Casablanca", "geopoint" : [33.573110, -7.589843],


    },
    function(error, result){

});

