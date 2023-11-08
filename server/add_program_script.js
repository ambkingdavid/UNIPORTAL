#!/bin/node
const ProgramOFStudy = require('./models/program.model');
const Course = require('./models/course.model');

async function createProgramAndCourses() {
  const programName1 = 'Biology';
  const programCategory1 = 'Bachelor of Science(BSc)';

  const programInfo1 = [
    // Year 1
    {
      year: 1,
      semester: 1,
      courses: [
        'Introduction to Biology',
        'Chemistry for Biologists',
        'College Writing',
      ],
    },
    {
      year: 1,
      semester: 2,
      courses: [
        'Cell Biology',
        'General Chemistry',
        'Statistics for Life Sciences',
      ],
    },
    // Year 2
    {
      year: 2,
      semester: 1,
      courses: [
        'Genetics',
        'Organic Chemistry',
        'Introduction to Ecology',
      ],
    },
    {
      year: 2,
      semester: 2,
      courses: [
        'Microbiology',
        'Evolutionary Biology',
        'Biochemistry',
      ],
    },
    // Year 3
    {
      year: 3,
      semester: 1,
      courses: [
        'Physiology',
        'Molecular Biology',
        'Biodiversity and Conservation',
      ],
      elective: [],
    },
    {
      year: 3,
      semester: 2,
      courses: [
        'Immunology',
        'Plant Biology',
        'Research Methods in Biology',
      ],
    },
    // Year 4
    {
      year: 4,
      semester: 1,
      courses: [
        'Advanced Topics in Biology',
        'Senior Thesis',
      ],
      elective: [
        'Marine Biology'
      ],
    },
    {
      year: 4,
      semester: 2,
      courses: [
        'Internship',
      ],
      elective: [
        'Neurobiology'
      ],
    },
  ];

  const newProgram1 = {
    name: programName1,
    category: programCategory1,
    info: programInfo1,
  }

  const programName2 = 'Computer Science';
  const programCategory2 = 'Bachelor of Science(BSc)';

  const programInfo2 = [
    // Year 1
    {
      year: 1,
      semester: 1,
      courses: [
        'Introduction to Computer Science',
        'Mathematics for Computer Science',
        'Programming Fundamentals',
      ],
    },
    {
      year: 1,
      semester: 2,
      courses: [
        'Data Structures and Algorithms',
        'Discrete Mathematics',
        'Web Development Fundamentals',
      ],
    },
    // Year 2
    {
      year: 2,
      semester: 1,
      courses: [
        'Object-Oriented Programming',
        'Database Management',
        'Computer Networks',
      ],
    },
    {
      year: 2,
      semester: 2,
      courses: [
        'Operating Systems',
        'Software Engineering',
        'Digital Logic Design',
      ],
    },
    // Year 3
    {
      year: 3,
      semester: 1,
      courses: [
        'Artificial Intelligence',
        'Mobile App Development',
        'Computer Graphics',
      ],
      elective: ['Cybersecurity'],
    },
    {
      year: 3,
      semester: 2,
      courses: [
        'Data Science',
        'Cloud Computing',
        'Software Testing',
      ],
      elective: ['Machine Learning'],
    },
    // Year 4
    {
      year: 4,
      semester: 1,
      courses: [
        'Capstone Project',
        'Software Project Management',
        'Ethical Hacking',
      ],
      elective: ['Blockchain Technology'],
    },
    {
      year: 4,
      semester: 2,
      courses: [
        'Internship',
      ],
      elective: ['Internet of Things'],
    },
  ];

  const newProgram2 = {
    name: programName2,
    category: programCategory2,
    info: programInfo2,
  }

  const programName3 = 'English';
  const programCategory3 = 'Bachelor of Arts(BA)';

  const programInfo3 = [
    // Year 1
    {
      year: 1,
      semester: 1,
      courses: [
        'Introduction to Literature',
        'Composition and Rhetoric',
        'World History',
      ],
    },
    {
      year: 1,
      semester: 2,
      courses: [
        'British Literature',
        'Creative Writing',
        'Introduction to Linguistics',
      ],
    },
    // Year 2
    {
      year: 2,
      semester: 1,
      courses: [
        'American Literature',
        'Shakespearean Studies',
        'Contemporary Poetry',
      ],
    },
    {
      year: 2,
      semester: 2,
      courses: [
        'Victorian Literature',
        'The Modern Novel',
        'Grammar and Syntax',
      ],
    },
    // Year 3
    {
      year: 3,
      semester: 1,
      courses: [
        'Literary Criticism',
        'African American Literature',
        'Comparative Literature',
      ],
      elective: ['Film Studies'],
    },
    {
      year: 3,
      semester: 2,
      courses: [
        'Renaissance Literature',
        'Postcolonial Literature',
        'Semiotics and Symbolism',
      ],
      elective: ['Theater Arts'],
    },
    // Year 4
    {
      year: 4,
      semester: 1,
      courses: [
        'Senior Thesis',
        'Modern Literary Theory',
        'Editing and Publishing',
      ],
      elective: ['Gender and Literature'],
    },
    {
      year: 4,
      semester: 2,
      courses: [
        'Internship',
        'Capstone Project',
      ],
      elective: ['Literary Translation'],
    },
  ];

  const newProgram3 = {
    name: programName3,
    category: programCategory3,
    info: programInfo3,
  }

  const programName4 = 'Chemistry';
  const programCategory4 = 'Bachelor of Science(BSc)';

  const programInfo4 = [
    // Year 1
    {
      year: 1,
      semester: 1,
      courses: [
        'Introduction to Chemistry',
        'College Writing',
        'Mathematics for Chemists',
      ],
    },
    {
      year: 1,
      semester: 2,
      courses: [
        'Inorganic Chemistry',
        'Organic Chemistry',
        'Physical Chemistry',
      ],
    },
    // Year 2
    {
      year: 2,
      semester: 1,
      courses: [
        'Analytical Chemistry',
        'Chemical Kinetics',
        'Quantum Mechanics',
      ],
    },
    {
      year: 2,
      semester: 2,
      courses: [
        'Biochemistry',
        'Environmental Chemistry',
        'Instrumental Analysis',
      ],
    },
    // Year 3
    {
      year: 3,
      semester: 1,
      courses: [
        'Inorganic Synthesis',
        'Spectroscopy',
        'Chemical Thermodynamics',
      ],
      elective: ['Chemical Engineering Principles'],
    },
    {
      year: 3,
      semester: 2,
      courses: [
        'Physical Chemistry Laboratory',
        'Nanomaterials Chemistry',
        'Organic Synthesis',
      ],
      elective: ['Advanced Inorganic Chemistry'],
    },
    // Year 4
    {
      year: 4,
      semester: 1,
      courses: [
        'Polymer Chemistry',
        'Advanced Analytical Chemistry',
        'Chemical Research Project',
      ],
      elective: ['Environmental Chemistry'],
    },
    {
      year: 4,
      semester: 2,
      courses: [
        'Industrial Internship',
        'Advanced Topics in Chemistry',
        'Capstone Project',
      ],
      elective: ['Medicinal Chemistry'],
    },
  ];

  const newProgram4 = {
    name: programName4,
    category: programCategory4,
    info: programInfo4,
  }


  // Create the program
  const program1 = await ProgramOFStudy.add(newProgram1);
  const program2 = await ProgramOFStudy.add(newProgram2);
  const program3 = await ProgramOFStudy.add(newProgram3);
  const program4 = await ProgramOFStudy.add(newProgram4);
  console.log('program1: ', program1.id);
  console.log('program2: ', program2.id);
  console.log('program3: ', program3.id);
  console.log('program4: ', program4.id);


  //Create courses from the program data
  const courseData = {
    'Introduction to Biology': { courseCode: 'BIO101', department: 'Biology' },
    'Chemistry for Biologists': { courseCode: 'CHM101', department: 'Chemistry' },
    'College Writing': { courseCode: 'ENG101', department: 'English' },
    'Cell Biology': { courseCode: 'BIO201', department: 'Biology' },
    'General Chemistry': { courseCode: 'CHM201', department: 'Chemistry' },
    'Statistics for Life Sciences': { courseCode: 'MTH201', department: 'Mathematics' },
    'Genetics': { courseCode: 'BIO301', department: 'Biology' },
    'Organic Chemistry': { courseCode: 'CHM301', department: 'Chemistry' },
    'Introduction to Ecology': { courseCode: 'BIO302', department: 'Biology' },
    'Microbiology': { courseCode: 'BIO401', department: 'Biology' },
    'Evolutionary Biology': { courseCode: 'BIO402', department: 'Biology' },
    'Biochemistry': { courseCode: 'CHM402', department: 'Chemistry' },
    'Physiology': { courseCode: 'BIO501', department: 'Biology' },
    'Molecular Biology': { courseCode: 'BIO502', department: 'Biology' },
    'Biodiversity and Conservation': { courseCode: 'BIO503', department: 'Biology' },
    'Immunology': { courseCode: 'BIO601', department: 'Biology' },
    'Plant Biology': { courseCode: 'BIO602', department: 'Biology' },
    'Research Methods in Biology': { courseCode: 'BIO603', department: 'Biology' },
    'Advanced Topics in Biology': { courseCode: 'BIO701', department: 'Biology' },
    'Senior Thesis': { courseCode: 'BIO702', department: 'Biology' },
    'Internship': { courseCode: 'BIO703', department: 'Biology' },
    'Marine Biology': { courseCode: 'BIO704', department: 'Biology' },
    'Neurobiology': { courseCode: 'BIO705', department: 'Biology' },
    'Introduction to Computer Science': { courseCode: 'CSC101', department: 'Computer Science' },
    'Mathematics for Computer Science': { courseCode: 'MTH101', department: 'Mathematics' },
    'Programming Fundamentals': { courseCode: 'CSC201', department: 'Computer Science' },
    'Data Structures and Algorithms': { courseCode: 'CSC301', department: 'Computer Science' },
    'Discrete Mathematics': { courseCode: 'MTH301', department: 'Mathematics' },
    'Web Development Fundamentals': { courseCode: 'CSC302', department: 'Computer Science' },
    'Object-Oriented Programming': { courseCode: 'CSC401', department: 'Computer Science' },
    'Database Management': { courseCode: 'CSC402', department: 'Computer Science' },
    'Computer Networks': { courseCode: 'CSC501', department: 'Computer Science' },
    'Operating Systems': { courseCode: 'CSC502', department: 'Computer Science' },
    'Software Engineering': { courseCode: 'CSC601', department: 'Computer Science' },
    'Digital Logic Design': { courseCode: 'CSC602', department: 'Computer Science' },
    'Artificial Intelligence': { courseCode: 'CSC701', department: 'Computer Science' },
    'Mobile App Development': { courseCode: 'CSC702', department: 'Computer Science' },
    'Computer Graphics': { courseCode: 'CSC703', department: 'Computer Science' },
    'Cybersecurity': { courseCode: 'CSC704', department: 'Computer Science' },
    'Data Science': { courseCode: 'CSC801', department: 'Computer Science' },
    'Cloud Computing': { courseCode: 'CSC802', department: 'Computer Science' },
    'Software Testing': { courseCode: 'CSC803', department: 'Computer Science' },
    'Machine Learning': { courseCode: 'CSC804', department: 'Computer Science' },
    'Capstone Project': { courseCode: 'CSC901', department: 'Computer Science' },
    'Software Project Management': { courseCode: 'CSC902', department: 'Computer Science' },
    'Ethical Hacking': { courseCode: 'CSC903', department: 'Computer Science' },
    'Blockchain Technology': { courseCode: 'CSC904', department: 'Computer Science' },
    'Internet of Things': { courseCode: 'CSC905', department: 'Computer Science' },
    'Introduction to Literature': { courseCode: 'ENG101', department: 'English' },
    'Composition and Rhetoric': { courseCode: 'ENG201', department: 'English' },
    'World History': { courseCode: 'HIS101', department: 'History' },
    'British Literature': { courseCode: 'ENG301', department: 'English' },
    'Creative Writing': { courseCode: 'ENG302', department: 'English' },
    'Introduction to Linguistics': { courseCode: 'ENG303', department: 'English' },
    'American Literature': { courseCode: 'ENG401', department: 'English' },
    'Shakespearean Studies': { courseCode: 'ENG402', department: 'English' },
    'Contemporary Poetry': { courseCode: 'ENG403', department: 'English' },
    'Victorian Literature': { courseCode: 'ENG501', department: 'English' },
    'The Modern Novel': { courseCode: 'ENG502', department: 'English' },
    'Grammar and Syntax': { courseCode: 'ENG503', department: 'English' },
    'Literary Criticism': { courseCode: 'ENG601', department: 'English' },
    'African American Literature': { courseCode: 'ENG602', department: 'English' },
    'Comparative Literature': { courseCode: 'ENG603', department: 'English' },
    'Film Studies': { courseCode: 'ENG604', department: 'English' },
    'Renaissance Literature': { courseCode: 'ENG701', department: 'English' },
    'Postcolonial Literature': { courseCode: 'ENG702', department: 'English' },
    'Semiotics and Symbolism': { courseCode: 'ENG703', department: 'English' },
    'Theater Arts': { courseCode: 'ENG704', department: 'English' },
    'Senior Thesis': { courseCode: 'ENG801', department: 'English' },
    'Modern Literary Theory': { courseCode: 'ENG802', department: 'English' },
    'Editing and Publishing': { courseCode: 'ENG803', department: 'English' },
    'Gender and Literature': { courseCode: 'ENG804', department: 'English' },
    'Capstone Project': { courseCode: 'ENG901', department: 'English' },
    'Literary Translation': { courseCode: 'ENG902', department: 'English' },
    'Introduction to Chemistry': { courseCode: 'CHM101', department: 'Chemistry' },
    'Mathematics for Chemists': { courseCode: 'MTH101', department: 'Mathematics' },
    'Inorganic Chemistry': { courseCode: 'CHM201', department: 'Chemistry' },
    'Organic Chemistry': { courseCode: 'CHM202', department: 'Chemistry' },
    'Physical Chemistry': { courseCode: 'CHM203', department: 'Chemistry' },
    'Analytical Chemistry': { courseCode: 'CHM301', department: 'Chemistry' },
    'Chemical Kinetics': { courseCode: 'CHM302', department: 'Chemistry' },
    'Quantum Mechanics': { courseCode: 'PHS101', department: 'Physics' },
    'Biochemistry': { courseCode: 'CHM401', department: 'Chemistry' },
    'Environmental Chemistry': { courseCode: 'CHM402', department: 'Chemistry' },
    'Instrumental Analysis': { courseCode: 'CHM403', department: 'Chemistry' },
    'Inorganic Synthesis': { courseCode: 'CHM501', department: 'Chemistry' },
    'Spectroscopy': { courseCode: 'CHM502', department: 'Chemistry' },
    'Chemical Thermodynamics': { courseCode: 'CHM503', department: 'Chemistry' },
    'Chemical Engineering Principles': { courseCode: 'CHM504', department: 'Chemical Engineering' },
    'Physical Chemistry Laboratory': { courseCode: 'CHM601', department: 'Chemistry' },
    'Nanomaterials Chemistry': { courseCode: 'CHM602', department: 'Chemistry' },
    'Organic Synthesis': { courseCode: 'CHM603', department: 'Chemistry' },
    'Advanced Inorganic Chemistry': { courseCode: 'CHM604', department: 'Chemistry' },
    'Polymer Chemistry': { courseCode: 'CHM701', department: 'Chemistry' },
    'Advanced Analytical Chemistry': { courseCode: 'CHM702', department: 'Chemistry' },
    'Chemical Research Project': { courseCode: 'CHM703', department: 'Chemistry' },
    'Environmental Chemistry': { courseCode: 'CHM704', department: 'Chemistry' },
    'Industrial Internship': { courseCode: 'CHM801', department: 'Chemistry' },
    'Advanced Topics in Chemistry': { courseCode: 'CHM802', department: 'Chemistry' },
    'Capstone Project': { courseCode: 'CHM803', department: 'Chemistry' },
    'Medicinal Chemistry': { courseCode: 'CHM804', department: 'Chemistry' }
  };


  const programData = [programInfo1, programInfo2, programInfo3, programInfo4];

  async function createCourses() {
    for (const programInfo of programData) {
      for (const programSemester of programInfo) {
        const courses = programSemester.courses;

        for (const courseName of courses) {
          const { courseCode, department } = courseData[courseName] || {};

          if (courseCode && department) {
            const newCourse = {
              courseName: courseName,
              courseCode: courseCode,
              department: department,
              unit: 3,
            };
            await Course.add(newCourse);
          } else {
            console.warn(`Course data not found for "${courseName}".`);
          }
        }
      }
    }
  }
  await createCourses(programData)
    .then(() => {
      console.log('Courses created successfully.');
    })
    .catch((error) => {
      console.error('Error creating courses:', error);
    });
}

createProgramAndCourses().catch((error) => {
  console.error('Error:', error);
});
