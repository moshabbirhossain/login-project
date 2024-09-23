import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Profile from '../pages/Profile';

const Nav = () => {
  const [isProfile, setIsProfile] = useState(false);

  const handleProfileMenu = () => {
    setIsProfile(false);
  }

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.profile-modal')) {
      setIsProfile(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, [isProfile]);

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
        <div tabIndex={1} role="button" onClick={(e) => {
          e.stopPropagation(); 
          setIsProfile(!isProfile);
        }} className='relative'>
          <div >
            <CgProfile className='w-10 h-10' />
          </div>
        </div>
        <div>
          { isProfile && 
            <div className="absolute right-0 mt-8 profile-modal z-[1]">
              <Profile onProfileMenu={handleProfileMenu} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;