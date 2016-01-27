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
                toastr.warning(error.reason);
                Router.go('/login');
            }else {
                toastr.success('Your Sign-up is successful!');
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
                toastr.warning(error.reason);
            }else {
                toastr.success('Login succeeded!');
                Router.go('/home');
            }
        });
    }
    });
    Template.login.events({
        'click #login-button-fb': function(event){
            Meteor.loginWithFacebook({}, function(error){
                if(error){
                    toastr.error('Facebook login failed');
                }
            });
        }
    });
    Template.login.events({
        'click #login-button-gl': function(event){
            Meteor.loginWithGoogle({}, function(error){
                if(error){
                    toastr.error('Google login failed');
                }
            });
        }
    });
}
