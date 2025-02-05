import React from "react"
import "../styles/home.css"
//import image1 from "../assets/image1.webp";
//import image2 from "../assets/image2.webp";
import {useNavigate} from 'react-router-dom';
import '../styles/homepage.css'
export const ProductList = [
    {
    id:1,
    image:"/v1.jpg",
    cardTitle:"oil",
    },
    {
        id:2,
        image:"/v2.jpg",
        cardTitle:"sugar",
        }
];
function HomePage() {
    const navigation = useNavigate();
    const handleNavigate = (id) => {
        navigation(`/singlepage/${id}`)
    }
    return(
        <div className="navcontainer">
            {ProductList.map((item) =>(
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