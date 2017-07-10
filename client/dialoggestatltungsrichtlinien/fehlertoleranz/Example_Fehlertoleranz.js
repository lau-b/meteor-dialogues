Template.Example_Fehlertoleranz.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Fehlertoleranz.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'fehlertoleranz'});
  }
})
