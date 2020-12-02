const { Schema, models } = require('mongoose');

const { Types, ObjectId } = Schema;

const UserSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true,
    },
    trek_id: {
        type: Types.Long,
        alias: 'trekId',
        required: true,
    },
    user_id: {
        type: Types.Long,
        alias: 'userId',
        required: true,
    },
    media_id: {
        type: Types.Long,
        alias: 'mediaId',
        required: true,
    },
    url: {
        type: String,
        alias: 'mediaUrl',
        required: true,
    },
    labels: {
        type: [ResultLabelSchema],
        required: false,
    },
    image_labels: {},
    metadata: {},
    moderation_labels: {},

}, { versionKey: false });

const userC = 'users';

const UserStoreModel = models['users'];

module.exports = {
    UserStoreModel,
};
