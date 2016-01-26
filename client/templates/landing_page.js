if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({
      key: 'AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA',
      libraries: 'places'
    });
  });


  Template.landing_page.onRendered(function () {
    this.autorun(function() {
      if (GoogleMaps.loaded()) {
        $('#landing_entry').geocomplete();

      }
    });

  });

}
