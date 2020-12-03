const uuidv4 = require('uuid').v4;
const { mongoose } = require('../../service/index');

const ss = {
    grandmother: [
        {
            id: '5d270fa9-cb14-421b-8473-6c1262a3c607',
            text: 'איזו פעילות סבתא מעדיפה',
            answers: [
                {
                    _id: '5fc8db06ec15cd693cd6a48a',
                    id: 'f0d57dc2-61f0-4ce0-90b2-38218dcb408f',
                    text: 'ללכת לים',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a48b',
                    id: '937440b0-27e3-4943-b02c-9667ccfb47ab',
                    text: 'לטייל בפארק',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a48c',
                    id: '2a0a74c6-104a-40ac-b472-d422b7fc5771',
                    text: 'בילוי ביתי',
                },
            ],
        },
        {
            id: 'd3abb3cd-9bcc-41ad-835d-d69f4d4cbbc8',
            text: 'השלם את המשפט הנכון ביותר: סבתא יוצאת מהבית',
            answers: [
                {
                    _id: '5fc8db06ec15cd693cd6a492',
                    id: '23ce5a27-41e5-49a6-9a1c-dfbac8fcac64',
                    text: 'בכוחות עצמה',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a493',
                    id: '15cb6a6a-931a-4d87-b60c-49187147b1b5',
                    text: 'עם מטפלת אישית',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a494',
                    id: '520fd776-9b68-4cce-801f-d7455d9de502',
                    text: 'לעיתים נדירות',
                },
            ],
        },
        {
            id: '0495b9f7-e5a5-451e-b742-1650433f3457',
            text: 'השלם את המשפט הנכון ביותר: סבתא אוהבת ביקורים משפחתיים',
            answers: [
                {
                    _id: '5fc8db06ec15cd693cd6a48e',
                    id: 'bf805a67-d9f7-4446-9d91-368b07c2bb41',
                    text: 'פעמיים בשבוע',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a48f',
                    id: '8d46027e-e2c4-45eb-84cd-7974250afce0',
                    text: 'בכל יום',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a490',
                    id: '36de90d3-02d9-4d38-8ae1-03708e38ec50',
                    text: 'מספר פעמים ביום',
                },
            ],
        },
    ],
    grandfather: [
        {
            id: 'bf65f480-74e5-4119-8dab-df170ed4fa3e',
            text: 'איזו פעילות סבא מעדיף',
            answers: [
                {
                    _id: '5fc8db06ec15cd693cd6a48a',
                    id: 'f0d57dc2-61f0-4ce0-90b2-38218dcb408f',
                    text: 'ללכת לים',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a48b',
                    id: '937440b0-27e3-4943-b02c-9667ccfb47ab',
                    text: 'לטייל בפארק',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a48c',
                    id: '2a0a74c6-104a-40ac-b472-d422b7fc5771',
                    text: 'בילוי ביתי',
                },
            ],
        },
        {
            id: 'fee6ef6d-be31-47bb-b76e-2c0a1ade19aa',
            text: 'השלם את המשפט הנכון ביותר: סבא יוצא מהבית',
            answers: [
                {
                    _id: '5fc8db06ec15cd693cd6a492',
                    id: '23ce5a27-41e5-49a6-9a1c-dfbac8fcac64',
                    text: 'בכוחות עצמו',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a493',
                    id: '15cb6a6a-931a-4d87-b60c-49187147b1b5',
                    text: 'עם מטפלת אישית',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a494',
                    id: '520fd776-9b68-4cce-801f-d7455d9de502',
                    text: 'לעיתים נדירות',
                },
            ],
        },
        {
            id: 'f42f9a94-a01a-4d0f-9b32-96ea0060f204',
            text: 'השלם את המשפט הנכון ביותר: סבא אוהב ביקורים משפחתיים',
            answers: [
                {
                    _id: '5fc8db06ec15cd693cd6a48e',
                    id: 'bf805a67-d9f7-4446-9d91-368b07c2bb41',
                    text: 'פעמיים בשבוע',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a48f',
                    id: '8d46027e-e2c4-45eb-84cd-7974250afce0',
                    text: 'בכל יום',
                },
                {
                    _id: '5fc8db06ec15cd693cd6a490',
                    id: '36de90d3-02d9-4d38-8ae1-03708e38ec50',
                    text: 'מספר פעמים ביום',
                },
            ],
        },
    ],
};

function f() {
    const ssa = JSON.parse(JSON.stringify(ss));
    ss.map((a) => {
        a.id = uuidv4();
        a.answers.id = uuidv4();
    });
    console.log([ss, ssa].flat());
}
f();
