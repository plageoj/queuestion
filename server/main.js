import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {});

Meteor.publish('Questions', (type, query, limit) => {
    if (!limit) limit = 30;
    switch (type) {
        case 'public':
            return Questions.find({ isPublic: true }, { limit: limit });
        case 'specific':
            return Questions.find({ _id: query }, { limit: limit });
        case 'users':
            return Questions.find({ userId: query }, { limit: limit });
    }
});