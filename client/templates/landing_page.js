//Template.landing_page.helpers({
//    backstretchHelper: function(){
//        $.backstretch('img/48.jpg');
//        }
//});

Template.landing_page.events({
    'submit #test':function(event){
        //event.preventDefault();
        this.render('/home');
    }
});

Template.landing_page.rendered = function () {
    AutoCompletion.init('input#landing-entry');
}

Template.landing_page.events = {
    'Keyup input#landing-entry': function(){
        AutoCompletion.autocomplete({
            element: 'input#landing-entry',
            collection: Properties,
            field: 'city',
            limit:0,
            sort: {name: 1 }
        });
    }
}