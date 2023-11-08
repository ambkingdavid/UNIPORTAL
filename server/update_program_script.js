const ProgramOFStudy = require('./models/program.model');

const programId = 'f36bc859-d80b-43a0-bdb4-f90657cb4d4f';
const year = 1;
const semester = 1;
const newCourses = ['Statistics']

ProgramOFStudy.updateProgramCourses(programId, year, semester, newCourses)
.then(result => {
  console.log(result);
})
.catch(err => {
  console.log(err)
});
