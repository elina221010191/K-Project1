//import React from "react"
import {useState} from "react"
import '../styles/usestatehook.css'
import { IoClose } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";



const UsestateHook= ({handleLoginForm}) =>
{
        return (
            <div className="content"> 
                <div >
                <form className="formcontainer">
                    <div className="head">
                       <h1 className="loginHeader">Login <LuLogIn className="loginicon" /> </h1>  
                <IoClose onClick={handleLoginForm} className="iconhead"/></div>
                <input type="email" placeholder="Email" className="input"></input>
                <input type="password" placeholder="Password" className="input"/> <FaRegEyeSlash />  
                   <p className="para1">Forgot Password?</p>
                <button type="button" className="button">Login </button>
                    <span className="para2">Don t have an Account? <button >Sign Up</button></span>
                 </form>
                </div>
               
            </div>
          
        )
    
}

export default UsestateHook 