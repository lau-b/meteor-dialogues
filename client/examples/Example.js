Meteor.subscribe('examples');

Template.Examples.helpers({
    examples: ()=> {
        return Examples.find({});
    }
})
