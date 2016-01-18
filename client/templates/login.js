//Template.login.helpers({
//    trimInputHelper: function(val){
//        return val.replace(/^\s*|\s*$/g, "");
//    }
//});

if(Meteor.isClient){
    Template.login.events({
    'submit #registerform': function(event, template){
        event.preventDefault();
        var fname = template.find('#first_name').value,
            lname = template.find('#last_name').value,
            email = template.find('#reg-email').value,
            pass1 = template.find('#reg-password').value,
            pass2 = template.find('#reg-password1').value;

        email = trimInputHelper(email);
        var val_err = 'Passwordsmust match';
        if(pass1 != pass2){
            return val_err;
        }

        var user = {'email':email, 'password':pass1, 'profile':
        {
            'name':fname +" "+ lname
        }};
        Accounts.createUser(user, function(err){
            if(!err){
                //document.location.reload(true);
                this.render('/')
            }

        });
        return false
        }
    });

  Template.login.events({
    'submit #loginform': function(event, tmpl){
        event.preventDefault();
        var email = event.find('#login-email').value,
            pass1 = event.find('#login-password').value;
        Meteor.loginWithPassword(email, pass1, function(err){
            if(!err){
                //document.location.reload(true);
                this.render('/');
            }
        });
        return false;
    }
  });
}