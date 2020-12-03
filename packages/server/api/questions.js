const _ = require('lodash');
const { mongoose } = require('@hakaton/service');
const questions = require('./questions.json');

const LIMIT = 5;

async function getPreQuestions(req, res, next) {
    try {
        return res.status(200).json(questions);
    } catch (e) {
        return next(e);
    }
}
async function get(req, res, next) {
    try {
        const docs = await mongoose.QuestionSchema.find().select('-_id');
        const response = _.sampleSize(docs.map((doc) => doc.toObject()), LIMIT);
        return res.status(200).json(response);
    } catch (e) {
        return next(e);
    }
}
module.exports = {
    get,
    getPreQuestions,
};
