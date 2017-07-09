Template.Example_Symmetrie.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Symmetrie.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'symmetrie'});
    }
})
