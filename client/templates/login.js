
//Helper method to help in form validation
Template.login.helpers({

    trimInputHelper : function(val){
        return val.replace(/^\s*|\s*$/g, ""); // regex to remove white space in email field
    }
});






Template.login.events({
    'submit #loginform': function(event, temp){
        event.preventDefault();

        var email = event.find('#login-email').value,
         password = event.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err) {
            if(Meteor.user()){
                Router.go('/');
                //document.location.reload(true);
            } else {
                var message = "There was an error login in: <strong>" + err.reason
                temp.find('#form-messages').html(message)
            }
            return
        });
        return false;


    }
});
