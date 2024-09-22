import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
const Nav = () => {
  const [isProfile, setIsProfile] = useState(false);
  const handleProfileMenu = () => {
    setIsProfile(!isProfile);
  }
    return (
      <div className="navbar fixed z-30 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to={'/home'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
          </div>
          <Link to={'/home'} className="btn btn-ghost text-xl">Project</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:space-x-6">
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown" 
          >
          <div tabIndex={0} role="button" className="" aria-expanded={isProfile ? "true" : "false"} onClick={handleProfileMenu}>
            <CgProfile className='w-10 h-10'/>
          </div>
          <div tabIndex={0} className={`${ isProfile ? "flex" : "hidden"} absolute right-1 top-14`}>
            <div className="min-w-60 mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-xl shadow-xl">
              <div className="border-b px-4 pb-6">
                <CgProfile className="h-24 w-24 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"/>
                <div className="py-2">
                  <h3 className="font-bold px-3 text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                    <div className="text-black text-nowrap px-3">
                      <div>User Id: 12005039</div>
                      <div>Phone: 01572996398</div>
                      <div>Email: moshabbir337@gmail.com</div>
                      <div>Nationality: Bangladeshi</div>
                  </div>
                </div>
              </div>
                
                <div className='px-1 pb-3'>
                  <Link to={'/'}>
                    <button className="flex-1 mx-auto w-full rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white  font-bold self-center hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                    Logout
                  </button>
                  </Link>
              </div>
                                
          </div>           
          </div>
        </div>
      </div>
    </div>
    );
};

export default Nav;