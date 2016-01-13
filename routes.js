Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: '404'
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        template: 'home'
    });
    this.route('Login', {
        path: '/login',
        template: 'login'
    });
});
