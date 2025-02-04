import React from "react";
import '../styles/blog.css';
function Blog(){
    const cards = [
        {
            id:1,
            title:"July 18, 2021",
            content:"Sed magna dui, dignissim id felis vitae, consectetur",
            image:"/blog.jpg",
        },
        {
            id:2,
            title:"July 18, 2021",
            content:"Fusce suscipit risus tempor, blandit urna at, laoreet ex",
            image:"/blog1.jpg",
        },
        {
            id:3,
            title:"July 18, 2021",
            content:"Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
            image:"/i.jpg",
        },
        {
            id:4,
            title:"July 18, 2021",
            content:"Sed magna dui, dignissim id felis vitae, consectetur",
            image:"/i1.jpg",
        },
        {
            id:5,
            title:"July 18, 2021",
            content:"Fusce suscipit risus tempor, blandit urna at, laoreet ex",
            image:"/i2.jpg",
        },
        {
            id:6,
            title:"July 18, 2021",
            content:"Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
            image:"/i3.jpg",
        }
    ];
    return(
        <div className="blogg">
            <h1 className="blog1">Blog</h1>
            <div className="card-container">
            {cards.map((card)=>(
                <div key={card.id} className="card">
                    <img src={card.image} alt={card.title} className="card-image"></img>
                    <div className="card-content">
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-content">{card.content}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

    )
}
export default Blog