interface Answers {
    id: string;
    text: string;
}

interface Question {
    id: string;
    text: string;
    answers: Answers[];
}

enum Categories {
    CloseBy = "CloseBy",
    Home = "Home",
    Outdoors = "Outdoors",
    Present = "Present",
    FarAway = "FarAway"
}

interface Hug {
    category: Categories[];
    id: string;
    text: string;

}

interface DataSet {
    questions: Question[];
    hugs: Hug[],
    connections: Array<{
        questionId: Question["id"]
        answerId: Answers["id"];
        hugId: Hug["id"]
    }>;
}


export const dataSet: DataSet = {
    questions: [{
        id: "3423fds",
        text: "איזו פעילות סבתא מעדיפה",
        answers: [{
            id: "Fdd4gd3hy",
            text: "ללכת לים"
        }, {
            id: "hmt35fds",
            text: "לטייל בפארק"
        },{
            id: "uj4gwe7tre",
            text: "בילוי ביתי"
        }]
    }, {
        id: "3423fds",
        text: "השלם את המשפט הנכון ביותר: סבתא אוהבת ביקורים משפחתיים",
        answers: [{
            id: "skfd84hif",
            text: "פעמיים בשבוע"
        }, {
            id: "s39fjfi2d",
            text: "בכל יום"
        },{
            id: "sj8fh28d",
            text: "מספר פעמים ביום"
        }]
    }, {
        id: "3423fds",
        text: "השלם את המשפט הנכון ביותר: סבתא יוצאת מהבית",
        answers: [{
            id: "fsld9fes",
            text: "בכוחות עצמה"
        }, {
            id: "sjfhe8324hfj",
            text: "עם מטפלת אישית"
        },{
            id: "shr8fiudw",
            text: "לעיתים נדירות"
        }]
    }],
    hugs: [{
        id: "",
        category: [Categories.CloseBy, Categories.Home],
        text: "ביקור עם הילדים"
    }, {
        id: "",
        category: [Categories.CloseBy, Categories.Outdoors],
        text: "לצאת לבית קפה"
    }, {
        id: "",
        category: [Categories.CloseBy, Categories.Outdoors, Categories.CloseBy],
        text: "לעשות קניות"
    }, {
        id: "",
        category: [Categories.FarAway],
        text: "לשלוח תמונה של הנכדים"
    },{
        id: "",
        category: [Categories.FarAway],
        text: "זום עם הנכדים"
    },{
        id: "",
        category: [Categories.FarAway],
        text: "שיחת טלפון"
    },{
        id: "",
        category: [Categories.Outdoors, Categories.CloseBy],
        text: "יציאה לפארק"
    },{
        id: "",
        category: [Categories.CloseBy, Categories.Present],
        text: "לשלוח ארוחת צהריים חמה"
    },{
        id: "",
        category: [Categories.CloseBy, Categories.Present],
        text: "לשלוח ארוחת בוקר"
    },{
        id: "",
        category: [],
        text: "יציאה משותפת לרופא"
    },{
        id: "",
        category: [Categories.CloseBy, Categories.Home],
        text: "מתנה קטנה לפני שבת"
    },{
        id: "",
        category: [Categories.Outdoors],
        text: "ללכת לגן חיות"
    },{
        id: "",
        category: [Categories.FarAway],
        text: "להתקשר ולספר כמה אתם אוהבים אותם"
    },{
        id: "",
        category: [Categories.FarAway],
        text: "לשלוח מכתב"
    },{
        id: "",
        category: [Categories.CloseBy, Categories.Home],
        text: ""
    },{
        id: "",
        category: [Categories.CloseBy, Categories.Home],
        text: ""
    }
    ],
    connections: []
}
