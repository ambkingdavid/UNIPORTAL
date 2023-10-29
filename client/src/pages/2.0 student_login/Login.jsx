import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, setUser } from "../../slices/userSlice";
import uniportal from "../../assets/uniportal.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Hash, Lock } from "lucide-react";

const url = "http://localhost:1245/student/login";

export default function Login() {
  const [matric, setMatric] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // MakeHTTP request using Axios
      const response = await axios.post(
        url,
        {
          username: matric,
          password: password,
        },
        { withCredentials: true }
      );

      // if the response contains user data, dispatch the login action
      dispatch(login(response.data));
      console.log(response);

      if (response.status === 200) {
        dispatch(setUser(response.data));
        // Login was successful, so navigate to the dashboard page
        navigate("/Dashboard");
      }
    } catch (error) {
      //  show an error message
      console.error("Login failed: ", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto rounded"
            src={uniportal}
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Student Signin
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <div className="mt-2 relative flex items-center text-gray-500">
                <Hash className="w-5 h-5 ml-3 absolute" />
                <input
                  id="matric"
                  name="matric"
                  type="text"
                  placeholder="Matric Number"
                  value={matric}
                  onChange={(e) => setMatric(e.target.value)}
                  autoComplete="matric"
                  required
                  className="block w-full pl-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2 relative flex items-center text-gray-500">
                <Lock className="w-5 h-5 ml-3 absolute" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm mt-2">
                <a
                  href="#"
                  className="font-semibold pl-60 text-blue-500 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/SignUp"
              className="font-semibold leading-6 text-blue-500 hover:text-blue-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
