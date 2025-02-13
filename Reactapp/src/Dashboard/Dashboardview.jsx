import React from 'react'
import './Dashboard_Styles/dashboardview.css'
import { TbHandClick } from "react-icons/tb";
import MoveChart from './MoveChartt';
import LineChartGraph from './LineChart';

const Dashboardview=()=>
{
    const cards =[
        {
            id:1,
            title:"New Subscribers",
            content:"5.093",
            image:"",
        },
        {
            id:2,
            title:"Streams",
            content:"47,095",
            image:"",
        },
        {
            id:3,
            title:"Engagement",
            content:"25.81",
            image:"",
        },
        {
            id:4,
            title:"Watch",
            content:"45.42",
            image:"",
        }
    ];
    
    return(
        <div>
            {/* <MoveGraph/> */}
            <div className="content1"><h3>Hello John Doe</h3>
            <h6>Nice day to work!</h6></div>
        <div className="content2"><h3>Profile Growth</h3>
        <h6>Overall Information!</h6></div>
        <div>
            <LineChartGraph/>
            <MoveChart/>
            </div>
        <div className="card1-container">
                            {cards.map((card) =>(
                                <div key={card.id} className="card">
                                     
                                    {/* <img src={card.image} alt="card.title" className="card-imagev"></img> */}
                                    <h1 className="card-title" ><TbHandClick />{card.title}</h1>
                                        <p className="card-content">{card.content}</p>
                                        {/* //<BiSolidChevronRightCircle className="iconv" size={40}/> */}
                        </div>
                ))}
                    </div>

                    </div>
    
    )
}
export default Dashboardview;