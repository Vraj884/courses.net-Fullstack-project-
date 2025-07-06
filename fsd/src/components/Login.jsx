import React, { useContext } from 'react';
import { GlobalUserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginstr, fun }) => {
  const AllData = useContext(GlobalUserContext);
  const navigate = useNavigate();

  const checkIsUser = async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;

    const data = await (
      await fetch(`/login?username=${email}&&password=${password}`)
    ).json();

    console.log(data);

    if (data.isUser) {
      AllData.onCorrectData(data.userdata);
      navigate('/', { replace: true });
    } else {
      alert('Please enter valid details to Log In');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#e7e8d0e0] dark:bg-myblack p-6 md:p-8 rounded-lg shadow-md border-[3px] border-black dark:border-purple">
        <h2 className="text-2xl font-bold text-center mb-6">{loginstr}</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="loginemail"
              name="email"
              className="mt-1 block w-full text-black border-black border-[2px] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium dark:text-white text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="loginpassword"
              name="password"
              className="mt-1 block w-full border-black border-[2px] text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            onClick={checkIsUser}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 transition duration-200"
          >
            Log In
          </button>
          <p className="text-center mt-6 text-sm">
            If you don't have an account,{' '}
            <span
              onClick={fun}
              className="underline cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
