import React, { useContext } from 'react';
import { GlobalUserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const AllData = useContext(GlobalUserContext);
  const username = AllData.UserData.Username;
  const navigate = useNavigate();

  const logout = () => {
    AllData.onLogOut();
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const updateuser = async () => {
    const obj = {
      old: AllData.UserData.Username,
      Name: document.getElementById('updatename').value,
      Username: document.getElementById('updatemail').value,
    };

    const data = await (
      await fetch(`/update`, {
        body: JSON.stringify(obj),
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      })
    ).json();

    if (data.updated) {
      AllData.onCorrectData(data.UserData);
      document.getElementById('updatebox').classList.add('hidden');
      document.getElementById('btnbox').classList.remove('hidden');
    }
  };

  const delete_account = async () => {
    const password = document.getElementById('dlt_pass').value;
    const obj = {
      Username: AllData.UserData.Username,
      Name: AllData.UserData.Name,
    };

    const checkk = await (
      await fetch(`/check`, {
        body: JSON.stringify({ Username: obj.Username, password }),
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
      })
    ).json();

    if (checkk.correct) {
      const data = await (
        await fetch(`/deleteID`, {
          body: JSON.stringify(obj),
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
        })
      ).json();

      if (data.deleted) {
        alert('Account Deleted Successfully');
        AllData.onLogOut();
        navigate('/');
      }
    } else {
      alert('Password is incorrect');
      document.getElementById('dlt').classList.add('hidden');
      document.getElementById('btnbox').classList.remove('hidden');
    }
  };

  return (
    <>
      {AllData.UserData.IsLoggedIn && (
        <div className="min-h-screen dark:text-white text-black flex items-center justify-center px-4">
          <div className="w-full max-w-2xl dark:bg-myblack bg-[#E7E8D1] rounded-lg p-6 md:p-10">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Here's Your Personal Details
            </h1>

            <p className="mb-4 text-lg font-mono font-semibold">
              <span>Name: </span>{AllData.UserData.Name}
            </p>
            <p className="mb-6 text-lg font-mono font-semibold">
              <span>Email: </span>{username}
            </p>

            <div id="btnbox" className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6">
              <button
                onClick={() => {
                  document.getElementById('dlt').classList.remove('hidden');
                  document.getElementById('btnbox').classList.add('hidden');
                }}
                className="px-4 py-2 font-bold font-mono text-white bg-red-600 hover:bg-red-800 rounded-lg"
              >
                Delete Account
              </button>

              <button
                onClick={() => {
                  document.getElementById('updatebox').classList.remove('hidden');
                  document.getElementById('btnbox').classList.add('hidden');
                }}
                className="px-4 py-2 font-bold font-mono text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg"
              >
                Update Details
              </button>

              <button
                onClick={logout}
                className="px-4 py-2 font-bold font-mono text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg"
              >
                Log Out
              </button>
            </div>

            {/* Delete Confirmation */}
            <div id="dlt" className="hidden flex-col gap-4 mb-6">
              <input
                id="dlt_pass"
                type="password"
                placeholder="Enter Password to Confirm"
                className="bg-white dark:bg-slate-800 text-black dark:text-white border border-black rounded px-4 py-2 w-full"
              />
              <button
                onClick={delete_account}
                className="mt-2 w-full font-bold font-mono text-white bg-red-600 hover:bg-red-800 rounded-lg py-2"
              >
                Submit Details
              </button>
            </div>

            {/* Update Box */}
            <div id="updatebox" className="hidden flex-col gap-4">
              <div className="mb-4">
                <label className="block mb-1 text-lg font-bold font-mono">Name:</label>
                <input
                  id="updatename"
                  type="text"
                  defaultValue={AllData.UserData.Name}
                  className="w-full bg-slate-100 dark:bg-slate-700 text-black dark:text-white px-4 py-2 rounded border border-black"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-lg font-bold font-mono">Email:</label>
                <input
                  id="updatemail"
                  type="text"
                  defaultValue={AllData.UserData.Username}
                  className="w-full bg-slate-100 dark:bg-slate-700 text-black dark:text-white px-4 py-2 rounded border border-black"
                />
              </div>

              <button
                onClick={updateuser}
                className="w-full mt-2 font-bold font-mono text-white bg-red-600 hover:bg-red-800 rounded-lg py-2"
              >
                Submit Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
