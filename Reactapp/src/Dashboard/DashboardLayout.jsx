import React from 'react'
import Sidebar from'./Sidebar';
import DashboardNavbar from './DashboardNavbar';
import {Outlet} from 'react-router-dom';
function DashboardLayout(){
    return(
        <section>
            <Sidebar/>
            <DashboardNavbar/>
            <Outlet/>
        </section>
    )
}
export default DashboardLayout;