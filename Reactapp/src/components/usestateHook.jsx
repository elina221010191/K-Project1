import { useState } from "react";
import "../styles/hook.css";
import { IoClose } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const UsestateHook = ({ handleLoginForm }) => {
  return (
    <div className="content">
      <div>
        <form className="formcontainer">
          <div className="head">
            <h1 className="loginHeader">
              Login <LuLogIn className="loginicon"/>
            </h1>
            <IoClose onClick={handleLoginForm} className="iconhead" />
          </div>

          {/* Email Input */}
          <div className="inputContainer">
            <TfiEmail className="icon emailIcon" />
            <input type="email" placeholder="Email" className="input" />
          </div>

          {/* Password Input */}
          <div className="inputContainer">
            <RiLockPasswordLine className="icon passIcon" />
            <input type="password" placeholder="Password" className="input" />
            <FaRegEyeSlash className="icon eyeIcon"></FaRegEyeSlash>  </div>

<p className="para1">Forgot Password?</p>
<button type="button" className="button">Login</button>

<span className="para2">
  Don’t have an Account? <button className="signupBtn">Sign Up</button>
</span>
</form>
</div>
</div>
);
};

export default UsestateHook;