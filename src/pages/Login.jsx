import { LockKeyhole, Eye, EyeOff, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    /* Login Form----------------- */
    <div className="px-8 text-center items-center justify-center flex flex-col gap-10 h-screen ">
      <div className="flex flex-col gap-6">
        <div className="Heading text-center text-[#85cb33]  font-extrabold text-[40px]">
          <h2 className="leading-10">
            Welcome <br /> Back
          </h2>
        </div>

        {/* <div className="w-full flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9206/9206805.png"
            alt="Logo"
          />
        </div> */}
      </div>

      <form className="grid grid-cols gap-6" action="">
        {/* UserName */}
        <label className="input bg-white text-white rounded-2xl h-fit py-1 border-black dark:input-bordered flex items-center gap-2 pl-1">
          <div className="border p-1 rounded-full bg-[#85cb33]">
            <UserRound size={17} />
          </div>
          <input
            type="text"
            className="grow text-black placeholder-black"
            placeholder="Username"
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
            placeholder="Password"
          />
          <button
            type="button"
            className="text-black px-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </label>

        {/* Submit Button */}
        <Link to={"/home"}>
          <label className="input bg-[#85cb33] text-white rounded-2xl h-fit py-1 input-bordered flex items-center gap-2 pl-1">
            <input type="submit" className="grow" value="Login" />
          </label>
        </Link>
      </form>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};

export default Login;
