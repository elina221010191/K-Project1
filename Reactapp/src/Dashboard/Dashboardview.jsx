import React from 'react'
import './Dashboard_Styles/dashboardview.css'
import { TbHandClick } from "react-icons/tb";
import MoveChart from './MoveChartt';
import LineChartGraph from './LineChart';
import CustomerOrderTable from './TableChart'
import ThemeProvider from './DarkMode'
import ReactDOM from 'react-dom';
import './Dashboard_Styles/darkmode.css';
import { CiMenuKebab } from "react-icons/ci";
import TwoChart from './TwoC'
const Dashboardview=()=>
{
    const posts =[
        {
            id:1,
            title:"New Subscribers",
            content:"5.093",
        },
        {
            id:2,
            title:"Streams",
            content:"47,095",
        },
        {
            id:3,
            title:"Engagement",
            content:"25.81",
        },
    ];
    
    return(
        <div className="view">
             <ThemeProvider/>
            <div className="content1"><h3>Hello John Doe</h3>
            <h6>Nice day to work!</h6></div>
            <div className="content2"><h3>Profile Growth</h3>
        <h6>Overall Information!</h6></div>
        <div className="move">
            <LineChartGraph/>
            <MoveChart/>
            <div className="move1">
            <CustomerOrderTable/>
            <div className="move2">
            <TwoChart/>
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
                                    <div>{post.content}</div>
                                    </div>  
                                    
                        </div>
                ))}
                    </div>
                    <div>
                      
                    </div>
                    </div>
                    
    
    )
}
export default Dashboardview;