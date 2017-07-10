Template.Example_Aufgabenangemessenheit.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examples');
  });
});

Template.Example_Aufgabenangemessenheit.helpers({
  examples: () => {
    return Examples.find({ createdFor: 'aufgabenangemessenheit'});
  }
})
