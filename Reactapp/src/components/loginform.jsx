import React from "react"
import "../styles/login.css"
import { MdClose } from "react-icons/md";
const LoginForm = ({handleForm}) =>
{
    return (
        <div className="Overlay">
            <div className="Modal">
            <form className="form"></form>
            <MdClose onClick={handleForm}/>
            <input type="text" placeholder="enter name"></input>
            <input type="password" placeholder="enter password"></input>
            <button type="login" className="button">login</button>
                login
        
            
        </div>
        </div>
    )
}
export default LoginForm;