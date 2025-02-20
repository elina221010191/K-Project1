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
          {/* <div className="avatar2"><BiFilter /> */}
          <h6></h6>
          </div>
          <h6></h6>
          {/* </div> */}
        </div>
       
        <ul className="board2-list">
          <h6>NAVIGATION</h6>
          <Link to='/Statistics'>
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
          <h6 className="active5">WIDGET</h6>
          <Link to='/Statistics'>
          <li className="active2">Statistics</li>
          </Link>
          <Link to='/Data'>
          <li className="active3">Data</li>
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
        </ul>
    </div>
)
}
export default Sidebar2;