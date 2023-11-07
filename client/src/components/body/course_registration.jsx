import { useState } from "react";

const CourseRegistration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemesters, setSelectedSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleCourseSelection = (e) => {
    const course = e.target.value;
    if (selectedCourses.length < 10 && !selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
    }
    setSelectedCourse(course);
  };

  const handleSemesterSelection = (e) => {
    const semester = e.target.value;
    if (
      selectedSemesters.length < 10 &&
      !selectedSemesters.includes(semester)
    ) {
      setSelectedSemesters([...selectedSemesters, semester]);
    }
    setSelectedSemester(semester);
  };

  const handleLevelSelection = (e) => {
    const level = e.target.value;
    if (selectedLevels.length < 10 && !selectedLevels.includes(level)) {
      setSelectedLevels([...selectedLevels, level]);
    }
    setSelectedLevel(level);
  };

  const combinedData = selectedCourses.map((course, index) => ({
    course,
    semester: selectedSemesters[index],
    level: selectedLevels[index],
  }));

  const removeSelectedCourse = (index) => {
    const updatedData = [...combinedData];
    updatedData.splice(index, 1);
    setSelectedCourses(selectedCourses.filter((_, i) => i !== index));
    setSelectedSemesters(selectedSemesters.filter((_, i) => i !== index));
    setSelectedLevels(selectedLevels.filter((_, i) => i !== index));

    setSelectedCourse("");
    setSelectedSemester("");
    setSelectedLevel("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrationSuccess(true);
  };

  return (
    <div className="flex flex-col items-center mx-auto gap-5">
      <h2 className="text-2xl font-semibold py-4">Course Registration</h2>
      {registrationSuccess ? (
        <p>Registration successful.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Dropdown for course selection */}
          <div className="flex gap-2 items-center">
            <label htmlFor="courseSelect">Select a Course:</label>
            <select
              className="rounded-lg border-none bg-gray-200 w-[200px]"
              id="courseSelect"
              value={selectedCourse || ""}
              onChange={handleCourseSelection}
            >
              <option value="" selected>
                None
              </option>
              <option value="Course A">Course A</option>
              <option value="Course B">Course B</option>
              <option value="Course C">Course C</option>
              <option value="Course D">Course D</option>
            </select>

            <label htmlFor="semesterSelect">Semester:</label>
            <select
              className="rounded-lg border-none bg-gray-200 w-[200px]"
              id="semesterSelect"
              value={selectedSemester || ""}
              onChange={handleSemesterSelection}
            >
              <option value="" selected>
                None
              </option>
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
            </select>

            <label htmlFor="levelSelect">Level:</label>
            <select
              className="rounded-lg border-none bg-gray-200 w-[200px]"
              id="levelSelect"
              value={selectedLevel || ""}
              onChange={handleLevelSelection}
            >
              <option value="" selected>
                None
              </option>
              <option value="100 level">100 level</option>
              <option value="200 level">200 level</option>
              <option value="300 level">300 level</option>
              <option value="400 level">400 level</option>
            </select>
          </div>

          {/* Display selected courses */}
          <div className="flex gap-3 mt-5 items-center">
            <h3 className="text-xl font-medium">Selected Courses:</h3>
            <ul>
              {combinedData.map((data, index) => (
                <li key={index}>
                  <span className="font-bold pl-2">Course:</span> {data.course},{" "}
                  <span className="font-bold pl-2">Semester:</span>{" "}
                  {data.semester},{" "}
                  <span className="font-bold pl-2">Level:</span> {data.level}
                  <button
                    type="button"
                    className="border-2 rounded-lg bg-blue-500 w-[100px] ml-3"
                    onClick={() => removeSelectedCourse(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="border-2 rounded-lg px-2 bg-blue-500"
            type="submit"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default CourseRegistration;
