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

}, { versionKey: false });

const UserStoreModel = model('users', UserSchema, 'users');

module.exports = UserStoreModel;
