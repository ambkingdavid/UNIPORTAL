import { logout } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout());
    };

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => handleLogout(e)}
            >
                Logout

            </button>
        </div>
    )
}

export default Logout