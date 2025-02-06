import React from "react";
import '../styles/shop.css'
import { FaStar } from "react-icons/fa";
import { LiaCircleSolid } from "react-icons/lia";
import shop from "../assets/shop.jpg"
function Shop(){
    const cards =[
        {
            id:1,
            title:"All In One Bottle",
            content:"$22.00 – $55.00",
            image:"/shopp.jpg"
        },
        {
            id:2,
            title:"Amazon Alexa",
            content:"$49.00 – $69.00",
            image:"/shopp1.jpg"
        },
        {
            id:3,
            title:"Headset Gamer Legion",
            content:"$22.00 – $55.00",
            image:"/shopp2.jpg"
        },
        {
            id:4,
            title:"Headset Gamer Legion Plus",
            content:"$22.00 – $55.00",
            image:"/shopp3.jpg"
        },
        {
            id:5,
            title:"JDoe’s Styling Watch",
            content:"$22.00 – $33.00",
            image:"/shopp4.jpg"
        },
        {
            id:6,
            title:"Jessi Cam Recorder",
            content:"$22.00 – $55.00",
            image:"/shoppp.jpg"
        },
        {
            id:7,
            title:"John Sport Shoes",
            content:"$22.00 – $55.00",
            image:"/shopp6.jpg"
        },
        {
            id:8,
            title:"Mouse Raxer 3000DPI",
            content:"$22.00 – $55.00",
            image:"/shopp7.jpg"
        },
        {
            id:9,
            title:"Santa Monica Facial Cream",
            content:"$22.00 – $55.00",
            image:"/shopp8.jpg"
        }
    ];
    return(
        <div className="shop">
            <img src="/shop.jpg"></img>
            <div className="body">
            <h1>Categories</h1>
            <option>Body Lotion(1)</option>
            <option>Computer Gadget(3)</option>
            <option>Electronics(5)</option>
            <option>Fashion(3)</option>
            <option>General(1)</option>
            <option>Shoes(2)</option>
            <option>Sports(3)</option>
            <option>Watch(1)</option>
            <option>Woman Clothes(3)</option>
            <p>color</p>
            <LiaCircleSolid size={30}/>
                            <LiaCircleSolid size={30} />
                            <LiaCircleSolid size={30}/>
                            <LiaCircleSolid size={30}/>
                            <p>Rating</p>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <p>Price</p>


            </div>
            <div>
            </div>
            
                <div className="card-container">
                    {cards.map((card) =>(
                        <div key={card.id} className="card">
                            <img src={card.image} alt={card.title} className="card-image"/>
                            <div className="card-content">
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-text">{card.content}</p>
                                <button type="button" className="button11" onClick={() =>handleNavigate(card.id)}>View</button>
                            </div>
                            <div className="icon">
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            </div>
                            <div className="iconn">
                            <LiaCircleSolid size={30}/>
                            <LiaCircleSolid size={30}/>
                            <LiaCircleSolid size={30}/>
                            <LiaCircleSolid size={30}/>
                            </div>
    
                </div>
                    ))}
                </div>
            
        </div>
    )
}
export default Shop