Router.configure({
    layoutTemplate: 'layoutMain',
    notFoundTemplate: '404',
    loadingTemplate: 'loading'
});

Router.configure({
    layoutTemplate: 'layoutLanding'
});

PropertyController = RouteController.extend({
    waitOn: function(){
        return Meteor.subscribe('single_property', this.params.slug);
    },
    data: function(){
        return Properties.findOne({_id: this.params._id});
    }
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
    this.route('Landing Page',{
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
    this.route('Submit Property', {
        path: '/submit_property',
        template: 'submit_property',
        layoutTemplate: 'layoutMain',

        onBeforeAction: function(){
            if(!Meteor.userId()){
                this.render('/login');
            } else {
                this.next();
            }

        },


        onAfterAction: function(){
            document.title = 'Altannonces | Submit Property';
        }
    });
    this.route('Single Properties', {
        path: '/properties/:_id',
        template: 'single_property',
        layoutTemplate: 'layoutMain',
        controller: 'PropertyController',

        onAfterAction: function(){
            data = Properties.findOne({_id:this.params._id});
            if(_.isObject(data) && !_.isArray(data)){
                document.title = 'Altannonces |'+ data.title;
            } else {
                document.title = 'Altannonces |'+ this.route.getName();
            }
        }

    })
    this.route('Edit Property', {
        path: '/edit_property/:_id',
        template: 'edit_property',
        layoutTemplate: 'layoutMain',
        controller: 'PropertyController',

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
    this.route('Ads List', {
        path: '/adslist',
        template: 'adsList',
        layoutTemplate: 'layoutMain',
        waitOn: function(){
            return Meteor.subscribe('editorRoles');
        },
        data: function(){
            return document.title = 'Altannonces | Mes-annonces';
        }
    });
    //var requiresLogin = function(){
    //    if(!Meteor.user() || !Meteor.user().roles.editorRoles){
    //        this.render('404');
    //    } else {
    //        this.next();
    //    }
    //};
    //Router.onBeforeAction(requiresLogin, {only: ['Submit Property', 'Edit Property']});



});



