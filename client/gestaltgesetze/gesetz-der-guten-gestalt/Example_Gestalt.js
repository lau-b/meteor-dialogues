Template.Example_Gestalt.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Gestalt.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'gestalt'});
    }
})
