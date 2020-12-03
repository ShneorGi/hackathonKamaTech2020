
interface Answers {
    id: string;
    text: string;
}

interface Question {
    id: string;
    text: string;
    answers: Answers;
}

enum Categories {
    CloseBy = "CloseBy",
    Home = "Home",
    Outdoors = "Outdoors",
    Present = "Present",
    FarAway = "FarAway"
}

interface Hug {
    category: Categories;
    id: string;
    text: string;

}

interface DataSet {
    questions: Question[];
    hugs: Hug[],
    connections: Array<{
        questionId: Question["id"]
        answerId: Question["answers"]["id"];
        hugId: Hug["id"]
    }>;
}


const dataSet: DataSet = {
    questions: [{
        id: "3423fds",
        text: ""
    }
    ],
    hugs: [

    ],
    connections: [

    ]
}