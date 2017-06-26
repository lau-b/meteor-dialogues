Examples = new Mongo.Collection('examples');

Examples.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

ExampleSchema = new SimpleSchema({
    description: {
        type: String,
        label: 'Beschreibung'
    },
    url: {
        type: String,
        label: 'URL'
    },
    altText: {
        type: String,
        label: 'Alternativer Text für das Bild'
    },
    createdFor: {
        type: String,
        label: 'Beispiel für'
    },
    author: {
        type: String,
        label: 'Autor',
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: 'hidden'
        }
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Examples.attachSchema( ExampleSchema )
