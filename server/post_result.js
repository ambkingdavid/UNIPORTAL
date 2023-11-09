#!/bin/node

const Student = require('./models/student.model');
const Course = require('./models/course.model');
const Result = require('./models/result.model');

async function registerCourses() {
  try {
    const studentList = await Student.findAll();

    for (let i = 0; i < 1; i++) {
      const student = studentList[i];

      const courses = await Student.getCourses(student.id);

      for (const course of courses) {
        const score = Math.floor(Math.random() * 101);

        let grade;
        if (score >= 70) grade = 'A';
        else if (score >= 60) grade = 'B';
        else if (score >= 50) grade = 'C';
        else if (score >= 40) grade = 'D';
        else if (score >= 30) grade = 'E';
        else grade = 'F';

        let GP;
        switch (grade) {
          case 'A':
            GP = 5;
            break;
          case 'B':
            GP = 4;
            break;
          case 'C':
            GP = 3;
            break;
          case 'D':
            GP = 2;
            break;
          case 'E':
            GP = 1;
            break;
          default:
            GP = 0;
        }

        const result = await Result.createResult({
          studentId: student.id,
          courseId: course.id,
          score,
          grade,
          GP,
          remarks: '',
        })

        console.log(result.id);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

registerCourses();
