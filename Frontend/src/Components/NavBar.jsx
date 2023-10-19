import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 rounded-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">CodePro</div>

          <ul className="flex space-x-4">
            <li>~
            <a href="/" className='text-2xl hover:underline text-white px-5 hover:text-purple-600'>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-2xl hover:underline text-white px-5 hover:text-amber-600 ">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-2xl hover:underline text-white px-5 hover:text-emerald-400 hover:text">
                Contact
              </a>
            </li>
            <li>
              <button className="inline-block w-full px-6 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 hover:text-xl bg-purple-500 ">Sign Up</button>
              
            </li>
            <li><button className="inline-block w-full px-6 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-red-400 hover:bg-gray-800 hover:text-xl">Log In</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
