#!/bin/node

const Student = require('./models/student.model');
const Course = require('./models/course.model');

const courses = ['Introduction to Biology', 'General Chemistry', 'Cell Biology']
const studentId = '325ac55e-1512-422f-9f4c-8e7088919077';

// Student.registerCourses(studentId, courses)
// .then((result) => {
//   if (result) {
//     console.log(result);
//   }
// })
// .catch((err) => {
//   console.log(err)
// });


Student.getcourses(studentId)
.then((result) => {
  console.log(result);
})
.catch(err => {
  console.log(err);
});
