const swaggerJSDoc = require('swagger-jsdoc');

// Define Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'My API documentation',
    },
  },
  apis: ['../routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
