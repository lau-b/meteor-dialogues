//Meteor.subscribe('examples');

Template.Example_Naehe.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Naehe.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'naehe'});
    }
})
