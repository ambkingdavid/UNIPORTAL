#!/bin/node

const Student = require('./models/student.model');
const Course = require('./models/course.model');

async function registerCourses() {
  try {
    const courseList = await Course.getAllCourses();
    const studentList = await Student.findAll();

    for (let i = 0; i < 1; i++) {
      const student = studentList[i];
      const courseFilter = student.Program.info.filter(
        (program) =>
          (program.year === Math.floor(student.level / 100) && program.semester <= student.semester) ||
          program.year < Math.floor(student.level / 100)
      );

      for (const obj of courseFilter) {
        const { year, semester} = obj;
        const courseReg = []
        for (const course of obj.courses) {
          const courseArgs = {
            courseName: course,
            level: year * 100,
            semester,
          };
          courseReg.push(courseArgs);
        }
        console.log(courseReg)
        // Student.registerCourses(student.id, courseReg).then(() => {console.log('registered course')}).catch((err) => {console.log(err)});
      }
    }
  } catch (error) {
    console.log(error);
  }
}

registerCourses();

