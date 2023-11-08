const Student = require('./models/student.model');

function generateMatricNumber() {
  return `STU${Math.floor(1000 + Math.random() * 9000)}`;
}

const programDegrees = {
  Biology: 'Bachelor of Science(BSc)',
  'Computer Science': 'Bachelor of Science(BSc)',
  English: 'Bachelor of Arts(BA)',
  Chemistry: 'Bachelor of Science(BSc)',
};

const programs = Object.keys(programDegrees);

const studentsData = [];

for (let i = 1; i <= 20; i++) {
  const selectedProgram = programs[Math.floor(Math.random() * programs.length)];
  const studentData = {
    matric: generateMatricNumber(),
    password: `password${i}`,
    email: `student${i}@example.com`,
    level: 100,
    semester: 1,
    courseOfStudy: selectedProgram,
    degree: programDegrees[selectedProgram],
  };

  studentsData.push(studentData);
}

for (const studentData of studentsData) {
  Student.add(studentData)
  .then((result) => {
    console.log(`Student created with matric ${studentData.matric}`);
  })
  .catch(err => {
    console.log(err);
  });
}
