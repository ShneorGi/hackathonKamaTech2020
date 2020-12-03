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
    text: {
        type: Types.String,
        required: true
    },
    answers: {
        type: [{
            id: Types.String,
            text: Types.string,
        }]
    }

}, { versionKey: false });

const QuestionStoreModel = model('questions', QuestionSchema, 'questions');

module.exports = QuestionStoreModel;
