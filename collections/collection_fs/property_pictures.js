if(Meteor.isServer){
  var imageStore = new FS.Store.S3("images1", {
    accessKeyId: "AKIAJHMCIW2LPX73AZDA",
    secretAccessKey: "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 ",
    bucket: "altannoncesdev"

  });

  PropertyPictures = new FS.Collection("PropertyPictures", {
    stores: [imageStore],
    filter: {
      allow:{
        contentTypes: ['images/*']
      }
    }
  });
}

if(Meteor.isClient){
  var imageStore = new FS.Store.S3("images1");
  PropertyPictures = new FS.Collection("PropertyPictures", {
    stores: [imageStore],
    filter:{
      allow:{
        contentTypes: ['image/*']
      },
      onInvalid: function(message){
        toastr.error(message);
      }
    }
  });
}

PropertyPictures.allow({
  insert: function() { return true; },
  update: function(){ return true; }
});