if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({
      key: 'AIzaSyBvB9v2e9LTPuJYaRTN7pc8zIStdzvaFxg',
      libraries: 'places'
    });
  });


  Template.landing_page.onRendered(function () {
    this.autorun(function() {
      if (GoogleMaps.loaded()) {
        $('#landing-entry').geocomplete();

      }
    });

  });

}
