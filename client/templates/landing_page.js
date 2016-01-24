Template.landing_page.onRendered(function(){
    this.autorun(function(){
        if(GoogleMaps.loaded()){
            $("#landing-entry").geocomplete();
        }
    });
});


Template.landing_page.helpers({
    backstretchHelper: function(){
        $.backstretch('img/48.jpg');
        }
});

Template.landing_page.events({
    'submit #test':function(event){
        //event.preventDefault();
        this.render('/home');
    }
});

Template.search.rendered = function () {
    AutoCompletion.init('input#landing-entry');
}

Template.search.events = {
    'Keyup input#landing-entry': function(){
        AutoCompletion.autocomplete({
            element: 'input#landing-entry',
            collection: Cities,
            field: 'name',
            limit:0,
            sort: {name: 1 }
        });
    }
}