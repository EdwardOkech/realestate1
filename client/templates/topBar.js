Template.topBar.onRendered({
    landingAuto : function(){
        AutoCompletion.init('input#filter-entry');
    }

});

Template.topBar.events({
    'keyup input#landing-entry' : function(){
        AutoCompletion.autocomplete({
            element: 'input#filter-entry',
            collection: Cities,
            field: 'name',
            limit: 0,
            sort: {name: 1}
        });
    }
})
