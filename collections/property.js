Properties = new Mongo.Collection('properties');
PropertiesStatus = new Mongo.Collection('propertiesStatus');

//Schemas.PropertyStatus = new SimpleSchema({
//    status:{
//        type: String,
//        allowedValues: ['pending','approved','expired']
//
//    }
//});
//
//PropertiesStatus.attachSchema(Schemas.PropertyStatus);
//
//PropertiesStatus.insert({}, function(error, result){
//
//});


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
                villa: 'Villa',
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
    city: {
        type:Schemas.City.name,
        label: 'Ville',
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
        label: 'Pieces',
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
    //currentState:{
    //    type:Schemas.PropertyStatus.status,
    //    optional:true
    //}
    //workflow:{
    //    type: [String],
    //    allowedValues: ['approved','declined','submitted','expires'],
    //    autoValue: function(){
    //        STATUS = ['approved','declined','submitted','expires'];
    //        for(var i=0;i<=STATUS.length;i++){
    //            if(this.insert(i)){
    //                return this.i;
    //            }
    //
    //        }
    //    }
    //}

});

Properties.attachSchema(Schemas.Property);

// validation objects

Properties.insert({}, function(error, result){

});
if(Meteor.isServer){
    Properties.allow({
        insert: function(userId, doc){
            return userId && doc.owner === userId && Meteor.user().roles.editor;
        },
        update: function(userId, doc, fields, modifier){
            return Meteor.user().roles.editor;
        },
        fetch : ['owner']
    });
    Properties.deny({
        update: function(userId, docs, fields, modifiers){
            return _.contains(fields, '*');
        }
    });
}
