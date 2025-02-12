import React from 'react'
import Sidebar from'./Sidebar';
import DashboardNavbar from './DashboardNavbar';
import {Outlet} from 'react-router-dom';
import "./Dashboard_Styles/dashboard-layout.css"
function DashboardLayout(){
    return(
        <div className="Main-outlet">
            <div className="SideBar-Element">
            <Sidebar/>
            </div>
               <div className="NavandDashboard">
            <div className="NavBarDashboard"><DashboardNavbar/></div>
           <div> <Outlet/></div>
            </div>
        </div>
    )
}
export default DashboardLayout;