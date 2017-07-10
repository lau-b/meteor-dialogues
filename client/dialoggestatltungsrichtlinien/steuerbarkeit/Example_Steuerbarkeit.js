Template.Example_Steuerbarkeit.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Steuerbarkeit.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'steuerbarkeit'});
  }
})
