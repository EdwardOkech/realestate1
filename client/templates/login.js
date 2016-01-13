
//Helper method to help in form validation
Template.login.helpers({

    trimInputHelper : function(val){
        return val.replace(/^\s*|\s*$/g, ""); // regex to remove white space in email field
    }
});


Template.login.events({
    'submit #registerform': function(event, template){
        event.preventDefault();

        var first_name = template.find('#first_name').value,
            last_name = template.find('#last_name').value,
            email = template.find('#reg-email').value,
            password = template.find('reg-password').value,
            password1 = template.find('reg-password1').value;

        email = trimInputHelper(email);
        var val_err = 'Passwords must match';
        if(password != password1){
            return val_err;
        }

        var user = {'email':email, 'password':password, 'profile': {'name': first_name +" "+last_name}};

        Accounts.createUser(user, function(err){
            if(!err){

                //Router.go('/');
                /*using has no effect on the page because
                 meteor recognizes we are on the same page and doesn't refresh
                 so opted to use pure javasript
                  */
                document.location.reload(true);
            }
        });
        return false; // return false to prevent form submission from reloading the page
    }
});



Template.login.events({
    'submit #loginform': function(event, t){
        event.preventDefault();

        var email = event.find('#login-email').value,
         password = event.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err) {
            if(!err){
                //Router.go('/');
                document.location.reload(true);
            }
        });
        return false;


    }
});
