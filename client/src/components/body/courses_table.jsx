import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Courses",
    selector: (row) => row.title,
  },
  {
    name: "Course Code",
    selector: (row) => row.year,
  },
  {
    name: "Course Unit",
    selector: (row) => row.year,
  },
  {
    name: "Lecturer",
    selector: (row) => row.year,
  },
  {
    name: "Progress",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
  {
    id: 2,
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
  {
    id: 3,
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
];

const CoursesTable = () => {
  return (
    <div className="border-4">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default CoursesTable;
