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
        "name": "Casablanca", "geopoint" : [33.573110, -7.589843],
        //"name" : "Marrakech", "geopoint" : [31.630000, -8.008889],
        //"name" : "Rabat", "geopoint" : [33.971590, -6.849813],
        //"name" : "Agadir" , "geopoint" : [30.427755, -9.598107],
        //"name" : "Al Hoceima", "geopoint" : [35.250000, -3.933333],
        //"name" : "Beni Mellal", "geopoint" :[32.339444, -6.360833],
        //"name" : "El Jadida"  ,"geopoint" : [33.233333, -8.500000],
        //"name" : "Essaouira " , "geopoint" :[31.508493, -9.759504],
        //"name" : "Essmara " ,"geopoint" :[26.741856, -11.678367],
        //"name" : "FËs " ,"geopoint" :[34.033333, -5.000000],
        //"name" : "KÈnitra" ,"geopoint" :[34.250000, -6.583333],
        //"name" : "KhÈnifra ","geopoint" :[32.939444, -5.667500],
        //"name" : "khmissat","geopoint" :[33.816667, -6.066667],
        //"name" : "Khouribga " ,"geopoint" : [32.886023, -6.920865],
        //"name" : "Larache " ,"geopoint" : [35.183333, -6.150000],
        //"name" : "MeknËs" ,"geopoint" : [33.895000, -5.554722],
        //"name" : "Mohammedia","geopoint" : [33.683509, -7.384855],
        //"name" : "Nador","geopoint" : [35.166667, -2.933333],
        //"name" : "Ouarzazate","geopoint" : [30.933544, -6.937016],
        //"name" : "Oujda","geopoint" :[34.686667, -1.911389],
        //"name" : "Safi","geopoint" : [32.300815, -9.227203],
        //"name" : "Settat","geopoint" : [33.000000, -7.616700],
        //"name" : "SalÈ","geopoint" : [34.033697, -6.770814],
        //"name" : "Tanger","geopoint" : [35.759465, -5.833954],
        //"name" : "Taza","geopoint" : [34.216667, -4.016667],
        //"name" : "Temara","geopoint" : [33.927835, -6.905182],
        //"name" :"TÈtouan","geopoint" : [35.566667, -5.366667],
        //"name" : "Berkane","geopoint" : [34.916667, -2.316667],
        //"name" : "Dakhla","geopoint" : [23.722111, -15.934738],
        //"name" : "Laayoune","geopoint" : [27.125287, -13.162500],
        //"name" : "Toutes les villes" ,"geopoint" : [32.240683, -7.616272]

    },
    function(error, result){

});

