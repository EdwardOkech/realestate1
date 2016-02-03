Router.configure({
    layoutTemplate: 'layoutMain',
    notFoundTemplate: '404'
});

Router.configure({
    layoutTemplate: 'layoutLanding'
});

Router.map(function() {
    this.route('Home', {
        path: '/home',
        template: 'home',
        layoutTemplate: 'layoutMain'

        //onBeforeAction: function(pause){
        //    this.render('landing_page');
        //}
    });
    this.route('Login', {
        path: '/login',
        template: 'login',
        layoutTemplate: 'layoutMain'
    });
    this.route('LandingPage',{
        path: '/',
        template: 'landing_page',
        layoutTemplate: 'layoutLanding',

    });
    this.route('Results',{
        path: '/results',
        template: 'results',
        layoutTemplate: 'layoutMain'
    });
    this.route('SubmitProperty', {
        path: '/submit_property',
        template: 'submit_property',
        layoutTemplate: 'layoutMain'
    });
    this.route('SingleProperty', {
        path: '/single_property',
        template: 'single_property',
        layoutTemplate: 'layoutMain'
    });
    this.route('Acheter', {
        path: '/acheter/:_id',
        template: 'acheter',
        layoutTemplate: 'layoutMain',
        data: function(){
            return Cities.findOne({_id: this.params._id});
        }
    })



});



