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
        layoutTemplate: 'layoutMain',

        onAfterAction: function(){
            document.title = 'Altannonces | Home';
        }
    });
    this.route('Login', {
        path: '/login',
        template: 'login',
        layoutTemplate: 'layoutMain',

        onAfterAction: function(){
            document.title = 'Altannonces | Login';
        }
    });
    this.route('LandingPage',{
        path: '/',
        template: 'landing_page',
        layoutTemplate: 'layoutLanding',

        onAfterAction: function(){
            document.title = 'Altannonces | Welcome';
        }

    });
    this.route('Results',{
        path: '/results',
        template: 'results',
        layoutTemplate: 'layoutMain',

        onAfterAction: function(){
            document.title = 'Altannonces | Results';
        }
    });
    this.route('SubmitProperty', {
        path: '/submit_property',
        template: 'submit_property',
        layoutTemplate: 'layoutMain',

        onAfterAction: function(){
            document.title = 'Altannonces | Submit Property';
        }
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



