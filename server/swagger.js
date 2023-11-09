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
  components: {
    schemas: {
      Staff: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          staffNumber: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          role: {
            type: 'string',
          },
          department: {
            type: 'string'
          },
          faculty: {
            type: 'string'
          },
        },
      },
      Student: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: 'generated_uuid_here',
          },
          matric: {
            type: 'string',
            example: 'student_matric_number',
            uniqueItems: true,
          },
          password: {
            type: 'string',
            example: 'password',
            minLength: 8,
          },
          email: {
            type: 'string',
            example: 'student@example.com',
            uniqueItems: true,
          },
          level: {
            type: 'integer',
            example: 100,
            defaultValue: 100,
          },
          semester: {
            type: 'integer',
            example: 1,
            defaultValue: 1,
          },
          courseOfStudy: {
            type: 'string',
            example: 'Computer Science',
          },
          degree: {
            type: 'string',
            example: 'BSc',
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
