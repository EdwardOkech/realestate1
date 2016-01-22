if(Meteor.isClient){
    Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=reg-email]').val();
        var password = $('[name=reg-password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
            if(error){
                alert(error.reason);
                Router.go('/login');
            }else {
                Router.go('/home');
            }
        });
        Router.go('/home');
    }
});
    Template.navbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    }
});




    Template.signin.events({
        'submit form': function(event){
        event.preventDefault();
        var email = $('[name=login-email]').val();
        var password = $('[name=login-password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                alert(error.reason);
            }else {
                Router.go('/home');
            }
        });
    }
    });
}
