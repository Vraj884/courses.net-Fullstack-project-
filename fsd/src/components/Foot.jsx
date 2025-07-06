import React from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <footer className="bg-myblack text-white py-6 px-4 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Branding */}
        <div className="text-center sm:text-left">
          <Link to="/" className="text-2xl font-bold underline hover:text-yellow-400 transition-colors">
            Courses.net
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="hover:underline hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:underline hover:text-yellow-400 transition-colors">About</Link>
          <Link to="/Profile" className="hover:underline hover:text-yellow-400 transition-colors">Profile</Link>
          <Link to="/Login" className="hover:underline hover:text-yellow-400 transition-colors">Login</Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center sm:text-right">
          © {new Date().getFullYear()} <span className="font-semibold">Courses.net</span> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Foot;
