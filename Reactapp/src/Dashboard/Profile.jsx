import React from "react";
//import "./Dashboard_Styles/sidebar.css";
import { GiMountainCave } from "react-icons/gi";
import {Link} from 'react-router-dom'
import ThemeProvider from './DarkMode'

function Profile(){
return(

       <div className="sidebar">
        <ThemeProvider/>
        <div className="profile-section">
          <div className="avatar"><GiMountainCave /></div>
          <h1>Virtual Dashboard</h1>
        </div>
       
        <ul className="board-list">
          <li className="active">Dashboard</li>
          <li>Profile</li>
          <li>Utilities</li>
          <li>Settings</li>
          <li>Messages</li>
          <li>Analytics</li>
          <li>Integrations</li>
        </ul>
    </div>
)
}
export default Profile;