const uuidv4 = require('uuid').v4;
const { mongoose } = require('../service/index');

async function create(req, res, next) {
    try {
        const { id } = await mongoose.UserSchema.create({ id: uuidv4() });
        return res.status(200).json({ id });
    } catch (e) {
        return next(e);
    }
}
async function get(req, res, next) {
    try {
        const { userId } = req.params;
        const doc = await mongoose.UserSchema.findOne({ id: userId }).select('-_id');
        return res.status(200).json(doc.toObject());
    } catch (e) {
        return next(e);
    }
}
async function update(req, res, next) {
    try {
        const { userId } = req.params;
        const doc = await mongoose.UserSchema.findOne({ id: userId }).select('-_id');
        return res.status(200).json(doc.toObject());
    } catch (e) {
        return next(e);
    }
}
async function destroy(req, res, next) {
    try {
        const { userId } = req.params;
        const doc = await mongoose.QuestionSchema.findOne({ id: userId }).select('-_id');
        return res.status(200).json(doc.toObject());
    } catch (e) {
        return next(e);
    }
}
module.exports = {
    create,
    get,
    update,
    destroy,
};
