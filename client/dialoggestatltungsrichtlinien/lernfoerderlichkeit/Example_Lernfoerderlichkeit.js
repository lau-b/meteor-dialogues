Template.Example_Lernfoerderlichkeit.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Lernfoerderlichkeit.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'lernfoerderlichkeit'});
  }
})
