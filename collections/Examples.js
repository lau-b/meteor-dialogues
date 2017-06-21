Examples = new Meteor.Collection('examples');

ExampleSchema = new SimpleSchema({
    description: {
        type: String,
        label: 'Beschreibung'
    },
    url: {
        type: String,
        label: 'URL'
    },
    author: {
        type: String,
        label: 'Autor',
        autoValue: function() {
            return this.userId
        }
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: function() {
            return new Date()
        }
    }
});

Examples.attachSchema( ExampleSchema )
