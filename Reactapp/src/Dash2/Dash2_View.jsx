import React from 'react'

import { TbHandClick } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import './Dash2_Styles/dash2view.css'
import { GoRocket } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import ViewGraph from './Viewbar'
import { AiOutlineFile } from "react-icons/ai";

const Dash2_View=()=>
{
    const posts =[
        {
         id:1,
       title:"All saving ",
      price:"$30200",
      percentage:"30.6%",
        icon:<CiCalendar />,
        color:"blue",
        colorbg:"lightgrey"
        },
        {
            id:1,
            title:"Page Views",
           price:"$30200",
           percentage:"30.6%",
             icon:<AiOutlineFile />,
             color:"green",
             colorbg:"lightorange"
        },
     ];
     const postss =[
        {
         id:1,
       title:"All saving ",
      price:"$30200",
      percentage:"30.6%",
        icon:<CiCalendar />,
        color:"blue",
        colorbg:"lightgrey"
        },
        {
            id:1,
            title:"Page Views",
           price:"$30200",
           percentage:"30.6%",
             icon:"Icon",
             color:"green",
             colorbg:"lightorange"
        },
     ];


    
    return(
        <div>
        <div className="view">
             <div className="explore">
            <h1>Explore Redesigned Able Pro</h1>
            <h6>The Brand new User Interface with power of Bootstrap Components.</h6>
            <h6>Explore the Endless possibilities with Able Pro.</h6>
        <button type="text" className="bt"><span className="ex">Exclusive on Themeforest </span></button>
        </div>
             <div>
            <GoRocket className="rock" size={50}/>
            {/* <img src={end}/> */}
            </div>
        <div className="move">
        {/* <ViewGraph/> */}
            <div className="move1">
            {/* <CustomerOrderTable/> */}
            {/* <ViewGraph/> */}
            <div className="move2">
            {/* <TwoChart/> */}
            
        </div>

            </div>
            </div>
       

                    </div>
                    <div className="post1-container">
                            {posts.map((post) =>(
                                <div key={post.id} className="post">
                                  <div className='postHead'>
                                    <div style={{backgroundColor:`${post.colorbg}`}} >{post.icon}</div>
                                    <div className='PostTitle'>{post.title}</div>
                                    <div className='PostMenu'><CiMenuKebab/></div>
                                    </div> 
                                  <div className="postHead1">
                                    <ViewGraph className="graph"/>
                                    <div>{post.price}</div>
                                    <div>{post.percentage}</div>
                                    </div>  
                                    
                        </div>
                ))}
                    </div>
                    </div>
    
    )
}
export default Dash2_View;