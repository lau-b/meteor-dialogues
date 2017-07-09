Template.Example_Schicksal.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Schicksal.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'schicksal'});
    }
})
