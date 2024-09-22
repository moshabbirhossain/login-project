import { LockKeyhole, Eye, EyeOff, Mail, User, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="px-8 text-center items-center justify-center flex flex-col gap-6 h-screen ">
      <div className="flex flex-col gap-3">
        <div className="Heading text-center text-[#85cb33] font-extrabold text-[40px]">
          <h2 className="leading-10">Welcome</h2>
        </div>

        {/* <div className="w-full flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9206/9206805.png"
            alt="Logo"
          />
        </div> */}
      </div>

      {/* SignUp form */}
      <form className="grid grid-cols gap-3" action="">
        {/* First Name */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <User size={17} />
          </div>
          <input
            type="text"
            className="grow text-black placeholder-black"
            placeholder="First Name"
          />
        </label>
        {/* Last Name */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <User size={17} />
          </div>
          <input
            type="text"
            className="grow text-black placeholder-black"
            placeholder="Last Name"
          />
        </label>

        {/* Phone Number */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <Mail size={17} />
          </div>
          <input
            type="phone"
            className="grow text-black placeholder-black"
            placeholder="Phone"
          />
        </label>
        {/* Email */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <Mail size={17} />
          </div>
          <input
            type="text"
            className="grow text-black placeholder-black"
            placeholder="Email Address"
          />
        </label>

        {/* Nationality */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <User size={17} />
          </div>
          <input
            type="text"
            className="grow text-black placeholder-black"
            placeholder="Nationality"
          />
        </label>

        {/* User ID */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <UserRound size={17} />
          </div>
          <input
            type="number"
            className="grow text-black placeholder-black"
            placeholder="User ID"
          />
        </label>

        {/* Password */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <LockKeyhole size={17} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className="grow text-black placeholder-black"
            placeholder="New Password"
          />
          <button
            type="button"
            className="text-black px-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </label>

        {/* Confirm Password */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <LockKeyhole size={17} />
          </div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="grow text-black placeholder-black"
            placeholder="Confirm Password"
          />
          <button
            type="button"
            className="text-black px-2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </label>

        {/* Submit Button */}
        <Link to={"/"}>
            <label className="input bg-[#85cb33] text-white rounded-2xl h-fit py-1 input-bordered flex items-center gap-2 pl-1">
            <input type="submit" className="grow" value="SignUp" />
            </label>
        </Link>
      </form>
      <Link to={"/"}>
            <label className="input hover:bg-[rgb(133,203,51)] hover:text-white rounded-2xl h-fit py-1 input-bordered flex items-center gap-2 px-28">
              <span className="px-2">Login</span>
            </label>
        </Link>

      {/* <Link to={"/"} className="hover:bg-[#85cb33] hover:text-white rounded-2xl h-fit py-1 text-center flex items-center gap-2 pl-1 w-1/5 mx-auto">Login</Link> */}
    </div>
  );
};

export default SignUp;
