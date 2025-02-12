import React from 'react';
import './Dashboard_Styles/dashboardnavbar.css'
import { RxSwitch } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
function DashboardNavbar(){
    return(
        <div className="textt">
                <CiSearch /><input type="text" placeholder="Search for stocks..." className="tex"/>
                <div className="text1">
                <h1>HELLO JOHN</h1>
                <h6>Have a nice work</h6>
                </div>
                <div className="text1">
                <h1>Profile Growth <RxSwitch /></h1>
                        <h6>Overall information</h6>
                </div>
        </div>

    )
}
export default DashboardNavbar;
