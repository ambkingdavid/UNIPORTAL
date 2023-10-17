import { logout } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { SlLogout } from "react-icons/sl";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = async (e) => {
    e.preventDefault();

try {
    await axios.post("http://localhost:1245/logout");

    dispatch(logout());
    history.push("/")
} catch (error) {
    console.log("logout error:", error)
    
}
    
  };

  return (
    <div >
      <button className=" text-gray-800" onClick={(e) => handleLogout(e)}>
        <SlLogout />
      </button>
    </div>
  );
};

export default Logout;
