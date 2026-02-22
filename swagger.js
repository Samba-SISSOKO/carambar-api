const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Blagues Carambar",
            version: "1.0.0",
            description: "API REST pour gérer des blagues Carambar",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "API v1",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;