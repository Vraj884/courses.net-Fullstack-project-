import React from 'react';

const Header = () => {
  const hideHeader = () => {
    const header = document.getElementById('Header');
    if (header) {
      header.style.transition = 'opacity 0.5s ease';
      header.style.opacity = '0';
      setTimeout(() => (header.style.display = 'none'), 500);
    }
  };

  return (
    <div
      className="bg-myblue dark:bg-myblue text-mywhite dark:text-mywhite w-full p-0 m-0 select-none relative"
      id="Header"
    >
      <p className="text-center py-4 px-2 font-bold text-sm sm:text-base lg:text-lg">
        All the skills you need at one place – Learn with the time.
      </p>

      <button
        onClick={hideHeader}
        aria-label="Close banner"
        className="absolute top-2 right-2 text-black bg-red-500 dark:bg-red-500 dark:text-black font-bold rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 hover:text-yellow-400 transition duration-200"
      >
        ×
      </button>
    </div>
  );
};

export default Header;
