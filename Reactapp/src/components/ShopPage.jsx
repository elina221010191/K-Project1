import React from "react"
import "../styles/home.css"
//import image1 from "../assets/image1.webp";
//import image2 from "../assets/image2.webp";
import {useNavigate} from 'react-router-dom';
import '../styles/homepage.css'
export const ShopList = [
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
function HomePage() {
    const navigation = useNavigate();
    const handleNavigate = (id) => {
        navigation(`/singlepage/${id}`)
    }
    return(
        <div className="navcontainer">
            {ShopList.map((item) =>(
            <div className="cont" key={item.id}>
            <div ><img src={item.image} className="cont1" /></div>
            <div>{item.cardTitle}</div>
            <button type="button" className="button11" onClick={() =>handleNavigate(item.id)}>View</button>
            
            </div>
        ))}
        </div>
    )
}
export default HomePage;