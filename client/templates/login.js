
//Helper method to help in form validation
//Template.login.helpers({
//
//    trimInputHelper : function(val){
//        return val.replace(/^\s*|\s*$/g, ""); // regex to remove white space in email field
//    }
//});


//Template.login.events({
//    'submit #registerform': function(event, template){
//        event.preventDefault();
//
//        var first_name = template.find('#first_name').value,
//            last_name = template.find('#last_name').value,
//            email = template.find('#reg-email').value,
//            password = template.find('reg-password').value,
//            password1 = template.find('reg-password1').value;
//
//        email = trimInputHelper(email);
//        var val_err = 'Passwords must match';
//        if(password != password1){
//            return val_err;
//        }
//
//        var user = {'email':email, 'password':password, 'profile': {'name': first_name +" "+last_name}};
//
//        Accounts.createUser(user, function(err){
//            if(!err){
//
//                //Router.go('/');
//                /*using has no effect on the page because
//                 meteor recognizes we are on the same page and doesn't refresh
//                 so opted to use pure javasript
//                  */
//                document.location.reload(true);
//            }
//        });
//        return false; // return false to prevent form submission from reloading the page
//    }
//});
//
//
//
//Template.login.events({
//    'submit #loginform': function(event, t){
//        event.preventDefault();
//
//        var email = event.find('#login-email').value,
//         password = event.find('#login-password').value;
//
//        Meteor.loginWithPassword(email, password, function(err) {
//            if(!err){
//                //Router.go('/');
//                document.location.reload(true);
//            }
//        });
//        return false;
//
//
//    }
//});
if(Meteor.isClient){
    Template.register.events({
        'submit #registerform':function(e,t){
            e.preventDefault();

            Accounts.createUser({
                username: t.find('#username').value,
                email: t.find('#email').value,
                password: t.find('#password').value,
                profile:{
                    fullname: t.find('#names').value
                }
            }, function(error){
                    if(error){
                        alert("Account is not created");
                    }else {
                        router.go('/home');
                    }

                });
        }
    });
    Template.signin.events({
        'submit #loginform': function(e,t){
            e.preventDefault();

            var unam = t.find('#login-username').value,
                password = t.find('#login-password').value;

            Meteor.loginWithPassword(unam, password, function(error){
                if(error){
                    alert("Wrong Credentials");
                }
            })
        }
    })
}
