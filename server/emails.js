Meteor.startup(function(){
    process.env.MAIL_URL = 'smtp://info@blomit.co.za:A4mJluKTZKXIaXob_BcRrg@smtp.mandrillapp.com:587'
});

Meteor.methods({
    sendEmail: function(userId, email){
        if(this.userId == userId){
            Email.send(email);
        }
    }
});
