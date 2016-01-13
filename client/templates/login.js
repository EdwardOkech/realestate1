Template.login.events({
    'submit .registerform': function(event){
        event.preventDefault();

        var first_name = event.target.first_name.value;
        var last_name = event.target.last_name.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        var user = {'email':email, password:password, profile: {name: first_name +" "+last_name}};

        Accounts.createUser(user, function(err){
            if(!err){
                Router.go('/');
            }
        });
    }
});



Template.login.events({
    'submit .loginform': function(event){
        event.preventDefault();

        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(username, email, function(err) {
            if(!err){
                Router.go('/');
            }
        });



    }
});
