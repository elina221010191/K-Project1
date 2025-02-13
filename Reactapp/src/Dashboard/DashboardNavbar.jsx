import React from 'react';
import './Dashboard_Styles/dashboardnavbar.css'
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";


// App.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
export default function DashboardNavbar()
{
    return(
        <div className="Main-Navbar">
            <div className='search'><IoIosSearch className='search-icon'/><span> Search for Stock</span></div>
            <div className='Time'><MdOutlineAccessTime className='time-icon'/><span>239891-18319</span></div>
            <div className='language'><span>EN<FaAngleDown/></span><IoMdNotificationsOutline className='not-icon'/></div>
            </div>

    )

}
