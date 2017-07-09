Template.Example_Erfahrung.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('examples');
    });
});

Template.Example_Erfahrung.helpers({
    examples: ()=> {
        return Examples.find({createdFor: 'erfahrung'});
    }
})
