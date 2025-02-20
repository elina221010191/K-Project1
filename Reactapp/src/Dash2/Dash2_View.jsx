import React from 'react'
// import './Dashboard_Styles/dashboardview.css'
import { TbHandClick } from "react-icons/tb";
// import MoveChart from './MoveChartt';
// import LineChartGraph from './LineChart';
// import CustomerOrderTable from './TableChart'
// import ThemeProvider from './DarkMode'
import './Dash2_Styles/dash2view.css'
import { GoRocket } from "react-icons/go";
import ViewGraph from './Viewbar'
// import './Dashboard_Styles/darkmode.css';
// import TwoChart from './TwoC'
const Dash2_View=()=>
{
    const posts =[
        {
         id:1,
       title:"New Subscribers",
      content:"5.093",
        image:""
        },
    //     {
    //         id:2,
    //         title:"Streams",
    //         content:"47,095",
    //         image:"",
    //     },
    //     {
    //         id:3,
    //         title:"Engagement",
    //         content:"25.81",
    //         image:"",
    //     },
    //     {
    //         id:4,
    //         title:"Watch Time",
    //         content:"45.42",
    //         image:"",
    //     }
     ];
    
    return(
        <div className="view">
             <div className="explore">
            <h1>Explore Redesigned Able Pro</h1>
            <h6>The Brand new User Interface with power of Bootstrap Components.</h6>
            <h6>Explore the Endless possibilities with Able Pro.</h6>
        <button type="text" className="bt"><span className="ex">Exclusive on Themeforest </span></button>
        </div>
             <div>
                <ViewGraph/>
            <GoRocket className="rock" size={50}/>
            </div>
        <div className="move">
            {/* <LineChartGraph/>
            <MoveChart/> */}
            <div className="move1">
            {/* <CustomerOrderTable/> */}
            <div className="move2">
            {/* <TwoChart/> */}
            </div>
            </div>
            </div>
        <div className="post1-container">
                            {posts.map((post) =>(
                                <div key={post.id} className="post">
                                     
                                    {/* <img src={card.image} alt="card.title" className="card-imagev"></img> */}
                                    <h1 className="post-title" ><TbHandClick />{post.title}</h1>
                                        <p className="post-content">{post.content}</p>
                                        <p className="post-description">{post.description}</p>
                                        {/* //<BiSolidChevronRightCircle className="iconv" size={40}/> */}
                        </div>
                ))}
                    </div>

                    </div>
    
    )
}
export default Dash2_View;