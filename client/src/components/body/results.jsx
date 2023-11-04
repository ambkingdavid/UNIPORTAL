import { useState } from "react";
import DataTable from "react-data-table-component";

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

//  const [setLevel, setLevelValue] = useState([data]);

// const handleChange = (e) => {
//     e.preventDefault();
//   const {
//     target: { value },
//   } = e;
//   setLevelValue(value);
// };

const ResultsTable = () => {
  return (
    <div className="flex flex-col h-screen w-screen gap-4">
      <div className="flex flex-row items-center gap-2 px-2 pt-5 ">
        <label htmlFor="semesterSelect">Choose level:</label>
        <select
          className="rounded-lg border-none bg-gray-200 w-[200px]"
          id="semesterSelect"
         //  value={setLevel}
        //   onChange={handleChange}
        >
          <option value="" disabled>
            None
          </option>
          <option value="100 level">100</option>
          <option value="200 level">200</option>
          <option value="300 level">300</option>
          <option value="400 level">400</option>
        </select>
      </div>
      <div className="border-4 w-screen px-5 mx-auto">
        <DataTable columns={columns} data={data}></DataTable>
      </div>
    </div>
  );
};

export default ResultsTable;
