import React from "react";
import '../styles/shop.css'
import shop from "../assets/shop.jpg"
function Shop(){
    const profile =[
        {   id:1,
            profilepicture:shop,
        }
       
    ]
    const cards =[
        {
            id:1,
            title:"fresh",
            content:"good",
            image:"/shop.jpg"
        },
        {
            id:2,
            title:"fresh1",
            content:"good1",
            image:"/shop.jpg"
        },
        {
            id:3,
            title:"fresh11",
            content:"good11",
            image:"/shop.jpg"
        }
    ];
    return(
        <div className="shop">
            <h1 className="all types">All types</h1>
                <div className="card-container">
                    {cards.map((card) =>(
                        <div key={card.id} className="card">
                            <img src={card.image} alt={card.title} className="card-image"/>
                            <div className="card-content">
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-text">{card.content}</p>
                            </div>
    
                </div>
                    ))}
                </div>
            
        </div>
    )
}
export default Shop