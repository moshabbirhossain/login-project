import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border rounded-xl shadow-xl p-4 w-64">
      <div className="border-b pb-6 text-center">
        <CgProfile className="h-24 w-24 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
        <div className="text-black dark:text-white">
          <div>User Id: 12005039</div>
          <div>Phone: 01572996398</div>
          <div>Email: moshabbir337@gmail.com</div>
          <div>Nationality: Bangladeshi</div>
        </div>
      </div>
      <div className="pt-3">
        <Link to={'/'}>
          <button
            className="w-full bg-[#85cb33] text-white font-bold rounded-full py-2 hover:bg-[#9cf03c]">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
