import React from "react";
import '../styles/venders.css';
function Venders(){
        const cards =[
            {
                id:1,
                title:"Storelists",
                content:"well",
                image:"/store.jpg",
            },
            {
                id:2,
                title:"Storelists",
                content:"well",
                image:"/store1.jpg",
            },
            {
                id:2,
                title:"Storelists",
                content:"well",
                image:"/store.jpg",
            }
        ];
        return(
            <div className="vendors">
                <h1 className="store">storelists</h1>
                <div className="card1-container">
                    {cards.map((card) =>(
                        <div key={card.id} className="card">
                            <img src={card.image} alt="card.title" className="card-imagev"></img>
                            <h1 className="card-title">{card.title}</h1>
                                <p className="card-content">{card.content}</p>
                </div>
        ))}
            </div>
        </div>
    )
}
export default Venders;