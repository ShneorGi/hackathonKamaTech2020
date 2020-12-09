const { mongoose } = require("@hakaton/service");
const { dataSet } = require("./data");
const uuidv4 = require('uuid').v4;

async function insertQuestions() {
    await Promise.all(
        dataSet.questions.map(async (q) => {
            q.id = uuidv4();
            q.answers.forEach((a => {
                a.id = uuidv4();
            }))
            const result = await mongoose.QuestionSchema.create(q);
            console.log(result);
        })
    );
}

async function insertHugs() {
    await Promise.all(
        dataSet.hugs.map(async (q) => {
            q.id = uuidv4();
            const result = await mongoose.HugsSchema.create(q);
            console.log(result);
        })
    );
}

async function insert() {
    await insertHugs();
    //await insertQuestions();
}

insert().then(() => {
    console.log("done");
})