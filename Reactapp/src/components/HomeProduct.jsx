import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../styles/homeproduct.css';

function HomeProduct(){
    const{register,handleSubmit}=useForm();
    const onsend=(data)=>
    {
        const{productTitle,images,productPrice,productContent}=data
        const formData=new FormData();
        try
        {
formData.append('productTitle',productTitle);
formData.append('images',images[0]);
formData.append('productPrice',productPrice);
formData.append('productContent',productContent);

const results=axios.post(`https://botiga-kvf9.onrender.com/product/createProduct`,formData,
    {
        headers:{
        "Content-Type":"multipart/form-data"
    }
}
)
        }
        catch(error)
        { 
            console.log(error);
        }
    }
    return(
        <div className="containerForm">
        <form className='forms' onSubmit={handleSubmit(onsend)}>
            <input type='text'  placeholder='Product Title' className="input-f" name='productTitle'
            {...register('productTitle', {required:true})}/>
            <input type='file'  placeholder='Product image' className="input-f" name='images'
            {...register('images', {required:true})}/>
            <input type='text'  placeholder='Product Content' className="input-f" name='productContent'
            {...register('productContent', {required:true})}/>
            <input type='text'  placeholder='Product Price' className="input-f" name='productPrice'
            {...register('productPrice', {required:true})}/>
            <button type='submit' className="button">Create Product</button>
        </form>

    </div>
    )
}
export default HomeProduct;