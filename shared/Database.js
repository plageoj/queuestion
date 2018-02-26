Questions = new Mongo.Collection('questions');
Questions.schema = new SimpleSchema({
    userId: { type: String, regEx: SimpleSchema.RegEx.Id },
    content: { type: String },
    isPublic: { type: Boolean, defaultValue: false },
    isAnswered: { type: Boolean, defaultValue: false },
    isDeclined: { type: Boolean, defaultValue: false },
    isReported: { type: Boolean, defaultValue: false },
    createdAt: { type: Date }
});