import axios from "axios";
import { Activity, MoreVertical } from "lucide-react";
import { UserData } from "../../components/body/userData";

axios.defaults.withCredentials = true;

export const getCourseData = () => {
  const { courseOfStudy, degree } = UserData();
  const url = `http://localhost:1245/program`;

  useEffect(() => {
    axios
      .get(url, { 
        params: {
          courseOfStudy: courseOfStudy,
          category: degree},
        withCredentials: true })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return data;
};

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
    name: "Lecturer",
    selector: (row) => row.lecturer,
  },
  {
    name: "Progress",
    selector: (row) => row.progress,
  },
  {
    cell: (row) => <MoreVertical size="small" row={row} strokeWidth="1px" />,
    allowOverflow: true,
    button: true,
    width: "46px",
  },
];

export const data = [
  {
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "10",
  },
  {
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "30",
  },
  {
    courses: "Beetlejuice",
    course_code: "1988",
    course_unit: "1988",
    lecturer: "kelvin",
    progress: "20",
  },
];
