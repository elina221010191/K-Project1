import React from "react";
import '../styles/venders.css';
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { BiGridSmall } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiFilter } from "react-icons/bi";
function Venders(){
        const cards =[
            {
                id:1,
                title:"",
                content:"",
                image:"/v.jpg",
            },
            {
                id:2,
                title:"",
                content:"",
                image:"/v1.jpg",
            },
            {
                id:3,
                title:"",
                content:"",
                image:"/v2.jpg",
            },
            {
                id:4,
                title:"",
                content:"",
                image:"/v3.jpg",
            },
            {
                id:5,
                title:"",
                content:"",
                image:"/v4.jpg",
            },
            {
                id:6,
                title:"",
                content:"",
                image:"/v5.jpg",
            }
        ];
        return(
            <div className="vendors">
                <h1 className="store">storelists</h1>
                <div>
                    <div className="main2">
                <div className="main">
                <h1>Total stores showing:6 </h1>
                <div className="main1">
                <button className="filter">Filter</button>
                <BiFilter />
                <h1>Sort by:<button>Most Recent </button></h1>
                <BiGridSmall />
                                <BiMenu />
                                </div>
                </div>
                </div>
                </div>
                <div className="card1-container">
                    {cards.map((card) =>(
                        <div key={card.id} className="card">
                            <img src={card.image} alt="card.title" className="card-imagev"></img>
                            <h1 className="card-title">{card.title}</h1>
                                <p className="card-content">{card.content}</p>
                                <BiSolidChevronRightCircle className="iconv" size={40}/>
                </div>
        ))}
            </div>
        </div>
    )
}
export default Venders;