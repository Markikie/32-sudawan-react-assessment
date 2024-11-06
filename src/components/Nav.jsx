import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
<nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end gap-8 p-6 text-white">
            <a href="/" className="px-6 py-2 rounded-full text-white bg-[#667C26] hover:bg-white hover:text-black shadow-lg transition-all duration-300 delay-100">Homepage</a>
            <a href="/user-profile" className= "px-6 py-2 rounded-full text-white bg-[#667C26] hover:bg-white hover:text-black shadow-lg transition-all duration-300 delay-100">Owner</a>
          </div>
        </div>
      </nav>
  );
}

export default Nav;

