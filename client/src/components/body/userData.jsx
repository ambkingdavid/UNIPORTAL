import { useSelector } from "react-redux";

export const UserData = () => {
  const userData = useSelector((state) => state.user);
  const profileFirstname = userData.profile.firstName;
  const profileLastname = userData.profile.lastName;

  const dep = userData.program.name;
  const semester = userData.user.semester;
  const level = userData.user.level;

  const filteredCourses = userData.program.info.filter((info) => {
    // Check if the semester and level match
    return info.semester === semester && Math.floor(level / 100) === info.year;
  });

  //array of objects that match the specified semester and level.

  // To get the courses from the first matched item (if any), you can do:
  const courses = filteredCourses.length > 0 ? filteredCourses[0].courses : [];

  const fullName = profileFirstname + " " + profileLastname;
  const department = dep;

  const programId = userData.user.ProgramId;
  const studentId = userData.user.id;
  const courseOfStudy = userData.user.courseOfStudy;
  const degree = userData.user.degree;

  return {
    fullName,
    level,
    semester,
    programId,
    studentId,
    courseOfStudy,
    degree,
    department,
    courses,
  };
};
