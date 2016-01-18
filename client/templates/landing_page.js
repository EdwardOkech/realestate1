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
})