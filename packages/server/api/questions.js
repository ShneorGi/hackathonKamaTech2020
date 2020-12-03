const _ = require('lodash');
const { mongoose } = require('@hakaton/service');

const LIMIT = 5;

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
};
