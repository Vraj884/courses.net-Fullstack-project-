import React, { useContext } from 'react';
import { GlobalUserContext } from '../App';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const AllData = useContext(GlobalUserContext);
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    const app = document.getElementById('App');
    const global = document.getElementById('global');

    app.classList.toggle('dark');
    global.style.background = app.classList.contains('dark') ? '#002C54' : '#66A5AD';
  };

  const handleLogout = () => {
    AllData.onLogOut();
    navigate('/');
  };

  const navItems = [
    { id: 1, name: 'HOME', path: '/' },
    { id: 2, name: 'ABOUT', path: '/About' },
    { id: 3, name: 'THEME', action: handleThemeToggle },
    ...(AllData.UserData.IsLoggedIn
      ? [{ id: 7, name: 'PROFILE', path: '/Profile' }]
      : []),
    AllData.UserData.IsLoggedIn
      ? { id: 4, name: 'LOGOUT', action: handleLogout }
      : { id: 4, name: 'LOGIN', path: '/Login' },
  ];

  return (
    <nav className="bg-[#E7E8D1] dark:bg-myblack shadow-md">
      <ul className="flex flex-wrap justify-center md:justify-end text-sm sm:text-base">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="w-1/2 sm:w-1/5 md:w-auto text-center font-bold"
          >
            {item.path ? (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-4 px-3 ${
                    isActive ? 'underline' : ''
                  } hover:bg-[#A7BEAE] dark:bg-myblack dark:text-mywhite bg-[#E7E8D1] text-black`
                }
              >
                {item.name}
              </NavLink>
            ) : (
              <button
                onClick={item.action}
                className="w-full py-4 px-3 hover:bg-[#A7BEAE] dark:bg-myblack dark:text-mywhite bg-[#E7E8D1] text-black"
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
