Template.Example_Selbstbeschreibungsfaehigkeit.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Selbstbeschreibungsfaehigkeit.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'selbstbeschreibungsfaehigkeit'});
  }
})
