Meteor.publish('examples', function() {
    return Examples.find({author: this.userId});
});
