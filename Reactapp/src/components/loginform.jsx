import React from 'react'
import '../styles/login.css'
import { IoIosCloseCircle } from "react-icons/io";


const LoginForm = ({handleForm}) =>
{
    return(
        <div className='formContainer'>
            <form className='form'>
            <IoIosCloseCircle onClick={handleForm} />
            <div className="fm">
            <input type="text" placeholder='Enter name' required></input>
            <input type="text" placeholder='Enter Password' required></input>
            </div>
            <button type="button" className='btn'>Login</button>
            </form>
        </div>
    )
}
export default LoginForm;