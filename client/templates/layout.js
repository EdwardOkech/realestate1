Template.layoutLanding.onRendered({
    landingAuto : function(){
        AutoCompletion.init('input#landing-entry');
    }

});

Template.layoutLanding.events({
    'keyup input#landing-entry' : function(){
        AutoCompletion.autocomplete({
            element: 'input#landing-entry',
            collection: Cities,
            field: 'name',
            limit: 0,
            sort: {name: 1}
        });
    }
});
