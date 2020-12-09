// @ts-ignore
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLFileLoader, loadSchema } from 'graphql-tools';
import {GraphQLSchema} from "graphql";



async function load() {
    const schema = await loadSchema('./question.graphql', {
        loaders: [
            new GraphQLFileLoader()
        ]
    });
    return schema;
}

const root = {
    question: async (input) => {
        return {
            id: "cvcv",
            text: "Sdfd",
            answers: [{
                id: "zfdvr",
                text: "fdffdafvg",
                language: "english"
            }, {
                id: "gfbzbg",
                text: "fdffdafvg",
                language: "english"
            }, {
                id: "nbnbvn",
                text: "fdffdafvg",
                language: "english"
            }, {
                id: "fvfv",
                text: "fdffdafvg",
                language: "english"
            }],
            language: "english"
        };
    },
};

async function server(schema: GraphQLSchema) {
    const app = express();
    app.use('/question', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));
    app.listen(4000);
    console.log('Running a GraphQL API server at localhost:4000/graphql');
}


load().then(server);

