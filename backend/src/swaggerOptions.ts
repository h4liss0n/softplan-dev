const options = {
    swaggerDefinition: {
        info: {
            description: 'Halisson Skalee',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:8090',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname,
    files: [
        './controllers/authenticator/**/*.ts',
        './controllers/people/**/*.ts'
    ]
};


export { options };

