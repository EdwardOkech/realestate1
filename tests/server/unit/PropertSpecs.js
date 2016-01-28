describe('Property', function(){
    // test frame describing the tests details
    MeteorStubs.uninstall();

    beforeEach(function(){
        MeteorStubs.install();
    })


});

it('Property should be properly inserted', function(){
    spyOn(Properties, 'findOne').and.callFake(function(){
        //emulate return a found document
        return {title: 'Example title'};
    });
    spyOn(Properties, 'insert');
    spyOn(Meteor, 'user').and,returnValue({_id: 4321, profile: {name: 'Okech'}});
    spyOn(global, 'moment').and.callFake(function(){
        return {unix: function(){
            return 1234;
        }};
    });

})

Meteor.call('insertProperty', {
    title: 'This property',

})
