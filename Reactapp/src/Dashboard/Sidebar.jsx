import React from "react";
import {Link} from 'react-router-dom'
import "./Dashboard_Styles/sidebar.css";
import { GiMountainCave } from "react-icons/gi";
// import ThemeProvider from './DarkMode'
function Sidebar(){
return(

       <div className="sidebar">
       {/* <ThemeProvider/> */}
        <div className="profile-section">
          <div className="avatar"><GiMountainCave /></div>
          <h1>Virtual Dashboard</h1>
        </div>
       
        <ul className="board-list">
          <Link to='/Dashboard'>
          <li className="active">Dashboard</li>
          </Link>
          <Link to='/Profile'>
          <li>Profile</li>
          </Link>
          <Link to="/Utilities">
          <li>Utilities</li>
          </Link>
          <Link to="/Settings">
          <li>Settings</li>
          </Link>
          <Link to="/Message">
          <li>Messages</li>
          </Link>
          <Link to="Analytics">
          <li>Analytics</li>
          </Link>
          <Link to="Integrations">
          <li>Integrations</li>
          </Link>
        </ul>
    </div>
)
}
export default Sidebar;