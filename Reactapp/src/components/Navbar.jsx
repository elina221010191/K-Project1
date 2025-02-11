import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import '../styles/styles.css';
import { MdArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
// import { PiNumberCircleZeroFill } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
import UsestateHook from './usestateHook';
import "bootstrap/dist/css/bootstrap.min.css";





function Navbar() {
    const [modal,setModal]= useState(false);
    const handleLoginForm = () =>
    {
        setModal(!modal)
    }
    return (

        <div>
            {modal && <UsestateHook handleLoginForm={handleLoginForm}/>}
            <div className='all'>
            <h1 className="title">Botiga</h1>
         <div className="allcategories">
    <div className="dropdown">
        <button className="dropbtn">All Categories <MdArrowDropDown className='dropicon' /></button> 
        <div className="dropdown-content">
            <a href="#">Uncategorized</a>
            <a href="#">General</a>
            <a href="#">Shoes</a>
            <a href="#">Clothes</a>
            <a href="#">Fashion</a>
        </div>
    </div>
    <input placeholder='   Search products...' className='input'/><CiSearch className='search'/>
</div>

<div className='icons'>
{/* <button onClick={handleLoginForm} className='navLoginBtn'>
<div className='loginBtn'>Login</div> </button> */}
<IoPersonOutline className='person' onClick={handleLoginForm}  />
<FaRegMessage className='cart'/> 
<CiHeart className='heart'/>

</div>
</div>


        <nav className="navbar">
            {/* Left side - Trending Categories */}
            <div className="nav-left">
            <div className="dropdown">
    <button className="dropbtn2">Trending Categories <MdArrowDropDown /></button> 

    <div className="dropdown-content">
        <a href="#">Body Lotion</a>
        <a href="#">Electronics</a>
        <a href="#">Woman Shoes</a>
        <a href="#">Clothes</a>
        <a href="#">Watches</a>
    </div>
        </div>

            </div>

            {/* Center - Home, Shop, Vendors, Blog, Contact */}
            <ul className="nav-center">
                <Link to="/Home"><li>Home</li></Link>
                <Link to="/Shop"><li>Shop</li></Link>
                <Link to="/Venders"><li>Venders</li></Link>
                <Link to="/Blog"><li>Blog</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
                <Link to="/Homeproduct">
                <li>Homeproduct</li>
                </Link>
                {/* <Link to="/View"><li>View</li></Link> */}
                {/* <Link to="/usestateHook"><li>Hook</li></Link> */}
                {/* <Link to="/Home2"><li>Home2</li></Link> */}
               
            </ul>
            {/* <li>view</li> */}

            {/* Right side - Call Number */}
            <div className="nav-right">
                <IoIosCall className="call-icon" />
                <span className='tel'>800-123-4567</span>
            </div>
        </nav>
        </div>
 );
}

export default Navbar;

