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
        const { name, type, actions } = req.body;
        const attributes = {};
        if (name) {
            attributes.name = name;
        }
        if (type) {
            attributes.type = type;
        }
        if (actions) {
            attributes.actions = actions;
        }
        const { nModified } = await mongoose.UserSchema.updateOne({ id: userId }, attributes);
        if (nModified) {
            return res.status(204);
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
        const { members } = doc.toObject();
        const { nModified } = await mongoose.UserSchema.updateOne({ id: userId }, { members });
        if (nModified) {
            return res.status(200).json(doc.toObject());
        }

        return next(new Error(`Failed update user : ${userId}`));
    } catch (e) {
        return next(e);
    }
}
async function addActivity(req, res, next) {
    try {
        const { userId } = req.params;
        const { activities } = req.body;
        const doc = await mongoose.UserSchema.findOne({ id: userId }).select('-_id');
        if (doc.activities) {
            doc.activities.push(activities);
        } else {
            doc.activities = [activities];
        }
        const newActivities = doc.toObject().activities;

        const { nModified } = await mongoose.UserSchema.updateOne({ id: userId }, { activities: newActivities });
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
    addActivity,
};
