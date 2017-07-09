Template.Example_Geschlossenheit.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Geschlossenheit.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'geschlossenheit'});
    }
})
