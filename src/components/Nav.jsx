import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
<nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end gap-8 p-6 text-white">
            <a href="/" className="bg-[#667C26] w-32 h-8 justify-center flex rounded-xl hover:bg-gray-700">Homepage</a>
            <a href="/user-profile" className= "bg-[#667C26] w-32 h-8 justify-center flex rounded-xl hover:bg-gray-700">Owner</a>
          </div>
        </div>
      </nav>
  );
}

export default Nav;

