Template.Example_Gleichheit.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Gleichheit.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'gleichheit'});
    }
})
