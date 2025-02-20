import React from "react";
import {Link} from 'react-router-dom'
import "./Dash2_Styles/sidebar2.css";
import { GiMountainCave } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { BiFilter } from "react-icons/bi";
// import ThemeProvider from './DarkMode'
function Sidebar2(){
return(

       <div className="sidebar2">
       {/* <ThemeProvider/> */}
        <div className="profile2-section">
        <h1 clasName="avatar3">Able</h1>
        <div className="avator4">
          <div className="avatar2"><IoPerson /><BiFilter />
          <h6>John Smith</h6>
          </div>
          <h6>Administrator</h6>
          </div>
        </div>
       
        <ul className="board2-list">
          <h6>Navigation</h6>
          <Link to='/Dash2'>
          <li className="active2">Dash2</li>
          </Link>
          <Link to='/Default'>
          <li className="active3">Default</li>
          </Link>
          <Link to="/Analytics">
          <li>Analytics</li>
          </Link>
          <Link to="/Finance">
          <li>Finance</li>
          </Link>
          <Link to="/Logout">
          <li>Logout</li>
          </Link>
          {/* <Link to="Analytics">
          <li>Analytics</li>
          </Link>
          <Link to="Integrations">
          <li>Integrations</li>
          </Link> */}
        </ul>
    </div>
)
}
export default Sidebar2;