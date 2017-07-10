Template.Example_Individualisierbarkeit.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Individualisierbarkeit.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'individualisierbarkeit'});
  }
})
