import React from "react";
import {Link} from "react-router-dom"
import "../styles/home.css"
import {useNavigate} from 'react-router-dom';
function Home(){
    const cards = [
        {
            id: 1,
            title: "Body Lotion",
            content: "",
            image: "/h1.jpg"
        },
        {
            id: 2,
            title: "Sports",
            content: "",
            image: "/h2.jpg"
        },
        {
            id: 3,
            title: "Computer Gadget",
            content: "",
            image: "/h3.jpg"
        },
        {
            id: 4,
            title: "Electronics",
            content: "",
            image: "/h4.jpg"
        },
        {
            id: 5,
            title: "Watch",
            content: "",
            image: "/h5.jpg"
        },
        {
            id: 6,
            title: "Electronics",
            content: "",
            image: "/h11.jpg"
        },
        {
            id: 7,
            title: "All In One Bottle",
            content: "$22.00 – $55.00",
            image: "/hh.jpg"
        },
        {
            id: 8,
            title: "Amazon Alexa",
            content: "$49.00 – $69.00",
            image: "/hh1.jpg"
        },
        {
            id: 9,
            title: "Headset Gamer Legion",
            content: "$22.00 – $55.00",
            image: "/hh3.jpg"
        },
        {
            id: 10,
            title: "Santa Monica's Store",
            content: "New York, NY",
            image: "/hhh.jpg"
        },
        {
            id: 11,
            title: "Josh Doe's Store",
            content: "New York, NY",
            image: "/hhh1.jpg"
        },
        {
            id: 12,
            title: "Digital Good's Store",
            content: "New York, NY",
            image: "/hhh2.jpg"
        },
        {
            id: 13,
            title: "Jessica's Store",
            content: "New York, NY",
            image: "/hhhh.jpg"
        },
        {
            id: 14,
            title: "The Glass Store",
            content: "New York, NY",
            image: "/hhhh1.jpg"
        },
        {
            id: 15,
            title: "John Doe's Store",
            content: "New York, NY",
            image: "/hhhh2.jpg"
        }
    ];
    const navigation = useNavigate();
    const handleNavigate = (id) => {
        navigation(`/SinglePage/${id}`)
    }
    return(

        <div className="home">
            <div className="homecontent">
                <ul>
            <li>Electronics</li>
            <li>Computer Gadget</li>
            <li>Fashion</li>
            <li>Body Lotion</li>
            <li>Sports</li>
            <li>Woman Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
            </ul>
            <h2>Popular Categories</h2>
</div>
            <h1 className="home-title">Explore our latest and greatest electronics</h1>
            <button className="button">Shop now</button>
            <div className="card-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-image"/>
                        <div className="card-content">
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-text">{card.content}</p>
                            <button type="button" className="button1" onClick={() =>handleNavigate(card.id)}>View</button>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}
export default Home