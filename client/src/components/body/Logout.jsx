import { logout } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { SlLogout } from "react-icons/sl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:1245/student/logout";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, {}, { withCredentials: true });

      dispatch(logout());

      if (response.status === 200) {
        // Logout was successful, so navigate to the login page
        navigate("/");
      }
    } catch (error) {
      console.log("logout error:", error);
    }
  };

  return (
    <div>
      <button className=" text-gray-800" onClick={(e) => handleLogout(e)}>
        <SlLogout />
      </button>
    </div>
  );
};

export default Logout;
