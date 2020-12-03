const uuidv4 = require('uuid').v4;
const { mongoose } = require('../../service/index');

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
        const { name } = req.body;
        const { nModified } = await mongoose.UserSchema.updateOne({ id: userId }, { name });
        if (nModified) {
            return res.status(200).json({});
        }
        return next(new Error(`Failed update user : ${userId}`));
    } catch (e) {
        return next(e);
    }
}
async function destroy(req, res, next) {
    try {
        const { userId } = req.params;
        const doc = await mongoose.QuestionSchema.deleteOne({ id: userId }).select('-_id');
        return res.status(200).json(doc.toObject());
    } catch (e) {
        return next(e);
    }
}
async function share(req, res, next) {
    try {
        const { userId, followId } = req.params;

        const doc = await mongoose.UserSchema.findOne({ id: userId }).select('-_id');
        if (doc.members) {
            doc.members.push(followId);
        } else {
            doc.members = [followId];
        }
        const { nModified } = await mongoose.UserSchema.updateOne({ id: userId }, { members: doc.toObject() });
        if (nModified) {
            return res.status(200).json(doc.toObject());
        }

        return next(new Error(`Failed update user : ${userId}`));
    } catch (e) {
        return next(e);
    }
}
module.exports = {
    create,
    get,
    update,
    destroy,
    share,
};
