// Define App constants

if(Meteor.App){
    throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js')
}

Meteor.App = {
    NAME: 'Real Estate ',
    DESCRIPTION: 'A map based real estate website for morocco'
};