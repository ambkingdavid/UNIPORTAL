import { useSelector } from "react-redux";

export const UserData = () => {
    const userData = useSelector((state) => state.user);

    const fullName = userData.profile.firstname + " " + userData.profile.lastname;
    const level = userData.user.level;
    const semester = userData.user.semester;
    const programId = userData.user.ProgramId;

   return { fullName, level, semester, programId};
};
