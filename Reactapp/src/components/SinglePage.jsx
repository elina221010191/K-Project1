import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from './HomePage';
function SinglePage(){
    const {id} = useParams();
    console.log("ProductList", id)
    const card= ProductList.find((card)=>card.id==id);
    return(
        <div>
           <div> <img src={card.image}/></div>
           <div>{card.cardTitle}</div>
        </div>
    )
}
export default SinglePage