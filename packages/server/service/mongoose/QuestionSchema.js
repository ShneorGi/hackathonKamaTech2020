const { Schema, model } = require('./client');

const { Types, ObjectId } = Schema;

const QuestionSchema = new Schema({
    _id: {
        type: ObjectId,
        auto: true,
    },
    id: {
        type: Types.String,
        required: true,
    },

}, { versionKey: false });

const QuestionStoreModel = model('questions', QuestionSchema, 'questions');

module.exports = QuestionStoreModel;
