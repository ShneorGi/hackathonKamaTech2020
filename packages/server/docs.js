const swaggerJSDoc = require('swagger-jsdoc');
const { version } = require('./package.json');

const openapi = '3.0.0';
const info = {
    title: 'Hackathon KamaTeck 2020',
    version,
    description: 'API Spec for server',
};
const servers = [{ url: 'http://184.73.85.49' }];
const tags = [
    { name: 'Users', description: 'Users api\'s' },
];
const swaggerDefinition = {
    openapi,
    info,
    servers,
    tags,
};

function createSpec(path) {
    const apis = [
        `${path}/docs/users.yaml`,
        `${path}/docs/questions.yaml`,
    ];

    try {
        return swaggerJSDoc({ swaggerDefinition, apis });
    } catch (e) {
        console.error(e);
        return {};
    }
}

module.exports = (path = '.') => createSpec(path);
