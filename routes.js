Router.configure({
    layoutTemplate: 'layoutMain',
    notFoundTemplate: '404',
    loadingTemplate: 'loading'
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
        },
        subscriptions: function(){
            return Meteor.subscribe('grid-view');
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

        //onBeforeAction: function(){
        //    if(!Meteor.user()){
        //        this.render('/login');
        //    }
        //
        //},


        onAfterAction: function(){
            document.title = 'Altannonces | Submit Property';
        }
    });
    this.route('Properties', {
        path: '/properties/:_id',
        template: 'single_property',
        layoutTemplate: 'layoutMain',

        waitOn: function(){
            return Meteor.subscribe('single-property', this.params._id);
        },
        onAfterAction: function(){
            data = Properties.findOne({_id:this.params._id});
            if(_.isObject(data) && !_.isArray(data)){
                document.title = 'Altannonces |'+ data.title;
            } else {
                document.title = 'Altannonces |'+ this.route.getName();
            }
        }

    });
    this.route('Acheter', {
        path: '/acheter/:city',
        template: 'acheter',
        layoutTemplate: 'layoutMain',
        waitOn: function(){
            return Meteor.subscribe('acheter', this.params.city);
        },
        data: function(){
            return Properties.findOne({city: this.params.city});
        }
    });
    this.route('Louer', {
        path: '/louer/:city',
        template: 'louer',
        layoutTemplate: 'layoutMain',
        waitOn: function(){
            return Meteor.subscribe('louer', this.params.city);
        },
        data: function(){
            return Properties.findOne({city: this.params.city});
        }
    });
    this.route('Contact', {
        path: '/contact',
        template: 'contact',
        layoutTemplate: 'layoutMain',
        data: function(){
            return document.title = 'Altannonces | Contact Us';
        }
    });



});



