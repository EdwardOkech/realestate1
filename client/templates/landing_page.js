/*Template.landing_page.events({
    'submit #test':function(event){
        //event.preventDefault();
        this.render('/home');
    }
});

Template.landing_page.onRendered(function(){
    this.autorun(function(){
        if(GoogleMaps.loaded()){
            $("#landing-entry").geocomplete();
        }
    });
});
*/

Template.landing_page.onRendered(function(){
    AutoCompletion.init('input#landing-entry');
});

Template.landing_page.events({
    'keyup input#landing-entry': function(){
        AutoCompletion.autocomplete({
            element: 'input#landing-entry',
            collection: Properties,
            field: 'title',
            limit: 0,
            sort: {name:1}
        });
    }
});