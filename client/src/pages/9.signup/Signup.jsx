import { useState } from "react";
import { useDispatch } from "react-redux";
import uniportal from "../../assets/uniportal.jpg";
import axios from "axios";
import { signup } from "../../slices/signupSlice";
import { Lock, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:1245/signup";

export default function Signup() {
  const [email, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [matric, setMatric] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // MakeHTTP request using Axios
      const response = await axios.post(url, {
        matric: matric,
        email: email,
        password: password,
      });

      // if the response contains user data, dispatch the login action
      dispatch(signup(response.data));

      if (response.status === 200) {
        // Signup was successful, so navigate to the login page
        navigate("/Login");
      }
    } catch (error) {
      //  show an error message
      console.error("Signup failed: ", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto rounded"
            src={uniportal}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-600">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <div className="mt-2 relative flex items-center text-gray-500">
                <User className="w-5 h-5 ml-3 absolute" />
                <input
                  id="matric"
                  name="matric"
                  type="text"
                  placeholder=" Matric Number"
                  value={matric}
                  onChange={(e) => setMatric(e.target.value)}
                  autoComplete="matric"
                  required
                  className="block w-full rounded-md border-0 pl-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2 relative flex items-center text-gray-500">
                <Mail className="w-5 h-5 ml-3 absolute" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={(e) => setEmailaddress(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 pl-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 pl-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
