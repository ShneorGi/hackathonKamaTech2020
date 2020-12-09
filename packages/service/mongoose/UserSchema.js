const { Schema, model } = require('./client');

const { Types, ObjectId } = Schema;

const UserSchema = new Schema({
    _id: {
        type: ObjectId,
        auto: true,
    },
    id: {
        type: Types.String,
        required: true,
    },
    name: {
        type: Types.String,
        required: false,
    },
    type: {
        type: Types.String,
        required: false,
    },
    members: {
        type: [Types.String],
        required: false,
    },
    questions: [{
        questionId: Types.String,
        answerId: Types.String,
    }],
    activities: [{}]
}, { versionKey: false });

const UserStoreModel = model('users', UserSchema, 'users');

module.exports = UserStoreModel;
