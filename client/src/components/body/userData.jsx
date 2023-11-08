import { useSelector } from "react-redux";

export const UserData = () => {
    const userData = useSelector((state) => state.user);

    const fullName = userData.profile.firstname + " " + userData.profile.lastname;
    const level = userData.user.level;
    const semester = userData.user.semester;
    const programId = userData.user.ProgramId;
    const studentId = userData.user.id;
    const courseOfStudy = userData.user.courseOfStudy;
    const degree = userData.user.degree;

   return { fullName, level, semester, programId, studentId, courseOfStudy, degree};
};
