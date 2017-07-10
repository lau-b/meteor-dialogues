Template.Example_Erwartungskonformitaet.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Erwartungskonformitaet.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'erwartungskonformitaet'});
  }
})
