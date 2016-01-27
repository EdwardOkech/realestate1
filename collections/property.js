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
        label: 'Addrese',
        optional: false

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
        allowedValues: ['appartement', 'villa', 'terrainConstructible', 'terrainAgricole'],
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
        allowedValues: ['louer', 'acheter'],
         optional: false,
        autoform: {
            options: {
                louer: 'Louer',
                acheter: 'Acheter'
            }
        }
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
        optional: true,
        autoform: {
            type: "select-checkbox",

        }
    },
    airConditioning: {
        type: String,
        label: 'Climatisation',
        optional: true,
        autoform: {
            type: "select-checkbox",

        }
    }

});

Properties.attachSchema(Schemas.Property);

// validation objects

Properties.insert({}, function(error, result){

});
