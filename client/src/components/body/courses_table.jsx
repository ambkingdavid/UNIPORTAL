import DataTable from "react-data-table-component";
import CourseRegistration from "./course_registration";

export const columns = [
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
    name: "Lecturer",
    selector: (row) => row.lecturer,
  },
  {
    name: "Progress",
    selector: (row) => row.progress,
  },
];

 export const data = [
  {
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
  {
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
  {
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
];

const CoursesTable = ({col, input}) => {
  return (
    <div className="flex flex-col h-screen w-screen gap-4">
      <div className="h-1/3 overflow-auto">
        <CourseRegistration />
      </div>
      <div className="border-4 w-3/4">
        <DataTable columns={col} data={input}></DataTable>
      </div>
    </div>
  );
};

export default CoursesTable;
