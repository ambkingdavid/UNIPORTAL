import { logout } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { SlLogout } from "react-icons/sl";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
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
