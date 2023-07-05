import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justifu-center items-border border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to='/'>
            <p className="text-2xl">
                Xplore
            </p>
        
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
