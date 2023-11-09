import { Activity } from "lucide-react";
import { UserData } from "../../components/body/userData";

const userData = UserData(); // Retrieve user data

const columns = [
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

// Dynamically generate the data array from user data
const data = userData.courses.map((course) => ({
  courses: course.name,
  course_code: course.code,
  course_unit: course.unit,
  grade: course.grade,
  semester: course.semester,
  level: course.level,
}));

export { columns, data };
