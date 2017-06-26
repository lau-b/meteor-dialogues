//Meteor.subscribe('examples');

Template.Examples.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Examples.helpers({
    examples: ()=> {
        return Examples.find({});
    }
})
