import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const LecturerResult = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Course A" },
    { id: 2, name: "Course B" },
    // Add more courses as needed
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [resultFile, setResultFile] = useState(null);
  const [progress, setProgress] = useState("");

  const handleCourseChange = (e) => {
    const courseId = parseInt(e.target.value, 10);
    const course = courses.find((c) => c.id === courseId);
    setSelectedCourse(course);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setResultFile(file);
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    setProgress(value);
  };

  const handleUploadResult = () => {
    // Implement the logic to upload the result sheet.
    // Use the 'resultFile' and 'selectedCourse' state.
    console.log("Uploading result sheet:", selectedCourse, resultFile);
  };

  const handleReportProgress = () => {
    // Implement the logic to report progress.
    // Use the 'selectedCourse' and 'progress' state.
    console.log("Reporting progress for:", selectedCourse, progress);
  };

  return (
    <div className="flex flex-col items-center  mx-auto gap-5">
      <h2 className="text-2xl font-semibold py-4">Lecturer Dashboard</h2>
      <div className="flex gap-2 items-center">
        <label htmlFor="courseSelect">Select a Course:</label>
        <select
          className="rounded-lg border-none bg-gray-200 w-[200px]"
          id="courseSelect"
          onChange={handleCourseChange}
        >
          <option value="">None</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCourse && (
        <div>
          <h3 className="p-4">
            Course:{" "}
            <span className="text-xl font-medium">{selectedCourse.name}</span>
          </h3>
          <div className="flex gap-3 items-center">
            <label htmlFor="resultUpload">Upload Result Sheet:</label>
            <input
              type="file"
              id="resultUpload"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </div>
          <button
            className="p-2 text-black my-4 bg-indigo-500 rounded-lg "
            onClick={handleUploadResult}
          >
            Upload Result
          </button>

          <div className="flex gap-2 mt-2">
            <label htmlFor="Lecture Progress"> Lecture Progress:</label>
            <Box sx={{ width: 300 }}>
              <Slider
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
            </Box>
          </div>
          <button onClick={handleReportProgress}>Report Progress</button>
        </div>
      )}
    </div>
  );
};

export default LecturerResult;
