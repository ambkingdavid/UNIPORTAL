import { Activity } from "lucide-react";

export const columns = [
  {
    cell: () => <Activity style={{ fill: "#43a047" }} />,
    width: "56px", // custom width for icon button
    style: {
      borderBottom: "1px solid #FFFFFF",
      marginBottom: "-1px",
    },
  },
    {
      name: "Courses",
      selector: (row) => row.courses,
    },
    {
      name: "Course Code",
      selector: (row) => row.course_code,
    },
    {
      name: "Course Unit",
      selector: (row) => row.course_unit,
    },
    {
      name: "Grade",
      selector: (row) => row.grade,
    },
    {
      name: "Semester",
      selector: (row) => row.semester,
    },
    {
      name: "Level",
      selector: (row) => row.level,
    },
  ];
  
  export const data = [
    {
      courses: "Beetlejuice",
      course_code: "CSC-101",
      course_unit: "3",
      grade: "A",
      semester: "1st Semester",
      level: "100",
    },
    {
      courses: "Beetlejuice",
      course_code: "CSC-211",
      course_unit: "3",
      grade: "B",
      semester: "1st Semester",
      level: "200",
    },
    {
      courses: "Beetlejuice",
      course_code: "CSC-311",
      course_unit: "2",
      grade: "C",
      semester: "1st Semester",
      level: "300",
    },
  ];