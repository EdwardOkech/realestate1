if(Meteor.isServer){
    Meteor.settings.contactForm = {
        emailTo: 'okechjobs@gmail.com',
        emailSubject: function(params){
            'Message from ' + params.name + ' via contact form'
        }
    };
}
