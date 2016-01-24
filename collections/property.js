Properties = new Mongo.Collection('properties');


Schemas.Property = new SimpleSchema({
    title:{
        type: String,
        label: "Titre",
         optional: false
    },
    description: {
        type: String,
        label: "Description",
        optional: false
    },
    address:{
        type: String,
        label: "Addresse",
         optional: false,
        autoform:{
            type: 'map',
            geolocation: true,
            searchBox: true,
            autolocate: true
        }

    },
    photos:{
        type: String,
        label: 'Photo',
         optional: true,
        autoform: {
            type: 'fileUpload',
            collection: 'PropertyPictures'
        }
    },
    type:{
        type: String,
        label: 'Categorie',
        allowedValues: ['Appartement', 'Villa', 'Terrain Constructible', 'Terrain Agricole'],
         optional: false,
        autoform:{
            options: {
                appartement: 'Appartement',
                villa: 'villa',
                terrainConstructible: 'Terrain Constructible',
                terrainAgricole: 'Terrain Agricole'
            }
        }
    },
    status:{
        type: String,
        label: 'Statut',
        allowedValues: ['Louer', 'Acheter'],
         optional: false,
        autoform: {
            options: {
                louer: 'Louer',
                acheter: 'Acheter'
            }
        }
    },
    city: {
        type: String,
        label: 'Ville',
        allowedValues: Utils.cityList,
         optional: false
    },
    price: {
        type: Number,
        label: 'Prix',
        decimal: true,
        optional: false
    },
    bedrooms: {
        type: Number,
        label: 'pieces',
        defaultValue: 0,
        optional: false

    },
    bathrooms: {
        type: Number,
        label: 'Salles de bains',
        defaultValue: 0,
        optional: false
    },
    parking: {
        type: Number,
        label: 'Places de parking',
        defaultValue: 0,
        optional: true
    },
    furnished: {
        type: String,
        label: 'Meuble/Non Meuble',
        defaultValue: false,
        optional: true
    },
    airConditioning: {
        type: String,
        label: 'Climatisation',
        defaultValue: false,
        optional: true
    }
});

Properties.attachSchema(Schemas.Property);

// validation objects

Properties.insert({}, function(error, result){

});
