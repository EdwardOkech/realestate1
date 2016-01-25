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
        layoutTemplate: 'layoutLanding'
    });
    this.route('Results',{
        path: '/results',
        template: 'results',
        layoutTemplate: 'layoutMain'
    });
    this.route('SubmitProperty', {
        path: '/submit_property',
        template: 'submit_property',
        LayoutTemplate: 'layoutMain'
    });

});
