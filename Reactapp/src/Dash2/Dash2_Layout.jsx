import React from 'react'
import Sidebar2 from'./Sidebar2';
import Dash2_Navbar from './Dash2_Navbar';
import {Outlet} from 'react-router-dom';
// import "./Dashboard_Styles/dashboard-layout.css"
function Dash2_Layout(){
    return(
        <div className="Main-outlet">
            <div className="SideBar-Element">
            <Sidebar2/>
            </div>
               <div className="NavandDashboard">
            <div className="NavBarDashboard"><Dash2_Navbar/></div>
           <div> <Outlet/></div>
            </div>
        </div>
    )
}
export default Dash2_Layout;