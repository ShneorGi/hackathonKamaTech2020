const { Schema, model } = require('./client');

const { Types, ObjectId } = Schema;

const HugsSchema = new Schema({
    _id: {
        type: ObjectId,
        auto: true,
    },
    id: {
        type: Types.String,
        required: true,
    },
    text: {
        type: Types.String,
        required: true,
    },
    category: {
        type: [Types.String],
    }

}, { versionKey: false });

const QuestionStoreModel = model('hugs', HugsSchema, 'hugs');

module.exports = QuestionStoreModel;