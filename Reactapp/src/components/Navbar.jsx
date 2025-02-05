import React, { useState } from "react";
import {Link} from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import '../styles/styles.css';
import LoginForm from "./loginform";
import "../styles/login.css";
function Navbar(){
    const [form, setForm] = useState(false);
    const handleForm = () =>
    {
      setForm(!form);
    }
    return(
        <div className="log"
        style={{
            display:"inline"
        }}>
            <div style={{
                display:"flex",
                gap:"80px"
            }}>
                {form && <LoginForm handleForm={handleForm}/>}
            <div><h2 className="log1">Botiga</h2></div>
            <select className="log2">
            <option className="all">All Categories</option>
            <option>Uncategorized</option>
            <option>Body Lotion</option>
            <option>Electronics</option>
            <option>General</option>
            <option>Shoes</option>
            <option>Watch</option>
            <option>Woman Clothes</option>
            <option>Fashion</option>
            <option>Sports</option>
            <option>Computer Gadgets</option>
            </select>
            <div className="search1" style={{
                display:"flex",
                alignItems: "center",
                border: "1px solid blue",
                borderRadius: "5px",

            }}>
            <input placeholder="  search products..." className="log3"/>
            <CiSearch className="search" />
            </div>
            <div style={
                {
                    display:"flex",
                    gap:"10px"
                }
            }>
            <IoPersonOutline />
            <LuMessageSquareMore />
            <FaRegHeart />
            </div>
            
            </div>
            <div>
        <section className="nav">
            <li>
                <select>
                <option>Trending Categories</option>
                <option>Body Lotion</option>
                <option>Electronics</option>
                <option>Woman Shoes</option>
                <option>Clothes</option>
                <option>Watches</option>
                </select>
            </li>
        
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/Shop">
        <li>Shop</li>
        </Link>
        <Link to="/Venders">
        <li>Venders</li>
        </Link>
        <Link to="/Blog">
        <li>Blog</li>
        </Link>
        <Link to="/Contact">
        <li>Contact</li>
        </Link>
        <Link to="/view">
        <li>view</li>
        </Link>
        <button className="button" onClick={handleForm}>login</button>
        <IoCallSharp />
        <li>800-123-4567</li>
        </section>
        </div>
      
        </div>
        
    )
}
export default Navbar

