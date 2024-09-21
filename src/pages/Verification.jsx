import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Verification = () => {
  // State to track the active tab
  const [isLoginActive, setIsLoginActive] = useState(true);

  return (
    <div>
      <div className="tabs">
        <div className="tab-content">
          {isLoginActive ? <Login /> : <SignUp />}
        </div>
        <button
          onClick={() => setIsLoginActive(true)}
          className={isLoginActive ? "active" : ""}
        >
          Login
        </button>
        <button
          onClick={() => setIsLoginActive(false)}
          className={!isLoginActive ? "active" : ""}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Verification;
