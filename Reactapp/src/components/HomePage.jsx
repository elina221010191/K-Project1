import React from "react"
import "../styles/home.css"
//import image1 from "../assets/image1.webp";
//import image2 from "../assets/image2.webp";
import {useNavigate} from 'react-router-dom';
import '../styles/homepage.css'
export const ProductList = [
        {
            id: 1,
            title: "Body Lotion",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/h1.jpg",
            price: "$22.00 – $55.00",
        },
        {
            id: 2,
            title: "Sports",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/h2.jpg",
            price: "$49.00 – $69.00",
        },
        {
            id: 3,
            title: "Computer Gadget",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/h3.jpg",
        },
        {
            id: 4,
            title: "Electronics",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/h4.jpg",
        },
        {
            id: 5,
            title: "Watch",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/h5.jpg"
        },
        {
            id: 6,
            title: "Electronics",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/h11.jpg",
        },
        {
            id: 7,
            title: "All In One Bottle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/hh.jpg",
            price: "$22.00 – $55.00",

        },
        {
            id: 8,
            title: "Amazon Alexa",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/hh1.jpg",
            price: "$49.00 – $69.00",
            
        },
        {
            id: 9,
            title: "Headset Gamer Legion",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: "/hh3.jpg",
            price: "$22.00 – $55.00",
        },
        {
            id: 10,
            title: "Santa Monica's Store",
            content: "New York, NY",
            image: "/hhh.jpg",
        },
        {
            id: 11,
            title: "Josh Doe's Store",
            content: "New York, NY",
            image: "/hhh1.jpg",
        },
        {
            id: 12,
            title: "Digital Good's Store",
            content: "New York, NY",
            image: "/hhh2.jpg",
        },
        {
            id: 13,
            title: "Jessica's Store",
            content: "New York, NY",
            image: "/hhhh.jpg",
        },
        {
            id: 14,
            title: "The Glass Store",
            content: "New York, NY",
            image: "/hhhh1.jpg",
        },
        {
            id: 15,
            title: "John Doe's Store",
            content: "New York, NY",
            image: "/hhhh2.jpg",
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