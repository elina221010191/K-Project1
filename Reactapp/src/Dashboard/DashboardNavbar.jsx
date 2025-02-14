import React from 'react';
import './Dashboard_Styles/dashboardnavbar.css'
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";


// App.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
export default function DashboardNavbar()
{
    return(
        <div className="Main-Navbar">
            <div className='search'><IoIosSearch className='search-icon'/><span><input type="text" placeholder="Search for Stock" className="in"/></span></div>
            <div className='Time'><MdOutlineAccessTime className='time-icon'/><span>14:00 AM</span></div>
            <div className='language'><span>EN<FaAngleDown/></span><IoMdNotificationsOutline className='not-icon'/></div>
           
            </div>

    )

}
