import React from 'react';

const Signup = ({ fun }) => {
  // ✅ Improved email validation using regex
  function checkemail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
  }

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // ✅ Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
    }

    if (password.length < 5 || confirmPassword.length < 5) {
      alert('Password must be at least 5 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!checkemail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // ✅ Prepare payload
    const obj = { fullName, email, password };

    try {
      const res = await fetch('/Signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      const data = await res.json();
      console.log('Server Response:', data);

      if (data.validData) {
        fun(); // ✅ Call parent function if successful
      } else {
        alert(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#e7e8d0e0] dark:bg-myblack p-6 sm:p-8 rounded-lg shadow-md border-[3px] border-black dark:border-purple">
        <h2 className="text-3xl font-bold text-center dark:text-white text-black">Register</h2>
        <p className="text-center dark:text-white text-black mt-2 mb-8">
          Please give the following details to register yourself
        </p>

        {/* ✅ Use form onSubmit instead of button onClick */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium dark:text-white text-black">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm text-black border-black border-[2px] sm:text-sm"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium dark:text-white text-black">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 text-black border-black border-[2px] rounded-md shadow-sm sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium dark:text-white text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full px-3 py-2 text-black border-black border-[2px] rounded-md shadow-sm sm:text-sm"
              placeholder="•••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium dark:text-white text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              className="mt-1 block w-full px-3 py-2 text-black border-black border-[2px] rounded-md shadow-sm sm:text-sm"
              placeholder="•••••"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md shadow-sm font-medium"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-6 text-center dark:text-white text-black text-sm">
          Already have an account?{' '}
          <span onClick={fun} className="cursor-pointer underline text-red-600 hover:text-red-800">
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
