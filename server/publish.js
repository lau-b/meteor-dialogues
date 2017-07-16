Meteor.publish('examples', function() {
    return Examples.find({});
});
