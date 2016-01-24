PropertyPictures = new FS.Collection("PropertyPictures", {
  stores: [
    new FS.Store.GridFS("propertyPictures", {
      transformWrite: function(fileObj, readStream, writeStream) {
        if (gm.isAvailable) {
          if (fileObj.original.type.substr(0, 5) === 'image') {
            return gm(readStream, fileObj.name()).autoOrient().stream().pipe(writeStream);
          } else {
            return readStream.pipe(writeStream);
          }
        } else {
          return readStream.pipe(writeStream);
        }
      }
    })
  ]
});
