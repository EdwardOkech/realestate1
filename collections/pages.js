Pages = new Mongo.Collection('pages');

Schemas.Page = new SimpleSchema({
    url:{
        type:String,
        regEx: SimpleSchema.RegEx.Url,
        optional:false

    },
    updatedDate: {
        type: Date,
        optional: false

    },
    siteMapPrio:{
        type:Number,
        optional:false
    }
});

Pages.attachSchema(Schemas.Page);

Pages.insert(
    {
      "url": "http://0.0.0.0:3000", updatedDate: " ", siteMapPrio: 1

    },
    function(error, result){

});


