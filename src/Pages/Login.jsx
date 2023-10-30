import { useState } from "react";
import GoogleLogin from "../Components/GoogleLogin";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    dispatch(login(email, password, navigate));
  };

  return (
    <section className="flex justify-center items-center bg-[url('/background.jpg')] bg-cover py-8 min-h-screen w-full contrast-125">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 rounded-md gap-10 px-10 py-14">
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-4xl font-bold my-2 text-white">
            Access your account now!
          </h1>
          <h3 className="text-2xl font-semibold my-2 text-red-500">
            Please log in to your account.
          </h3>
          <p className="text-red-400">
            Enter your email and password to access everything we have to offer.
          </p>
        </div>
        <div>
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <h1 className="block text-gray-700 font-bold mb-5 text-2xl text-center">
                Login in to Your Account
              </h1>
              <input
                className="shadow appearance-none focus:border-red-400 border border-slate-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow focus:border-red-400 appearance-none border border-slate-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                className=" bg-red-600 w-full hover:bg-red-700 md:px-6 md:py-2 text-white font-bold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="text-center">
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="flex justify-center">
                <GoogleLogin buttonText={"Login With Google"} />
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  Dont have an account?{" "}
                  <a
                    href="/register"
                    className="text-blue-600 hover:opacity-70"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
