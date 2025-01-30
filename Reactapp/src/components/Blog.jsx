import React from "react";
import '../styles/blog.css';
function Blog(){
    const cards = [
        {
            id:1,
            title:"Blog",
            content:"Sed magna dui, dignissim id felis vitae, consectetur",
            image:"/blog.jpg",
        },
        {
            id:2,
            title:"Blog",
            content:"Fusce suscipit risus tempor, blandit urna at, laoreet ex",
            image:"/blog1.jpg",
        },
        {
            id:3,
            title:"Blog",
            content:"Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
            image:"/blog.jpg",
        }
    ];
    return(
        <div className="blogg">
            <h1 className="blog1">Blog</h1>
            <div className="blog-container">
            {cards.map((cardd)=>(
                <div key={cardd.id} className="blog2">
                    <img src={cardd.image} alt={cardd.title} className="blog3"></img>
                    <div className="cardblogcontent">
                    <h1 className="card-title">{cardd.title}</h1>
                    <p className="card-content">{cardd.content}</p>
                    </div>
                </div>

            ))}
            </div>
        </div>

    )
}
export default Blog