import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

function HomeProduct(){
    const{register,handleSubmit}=useForm();
    const onsubmit=(data)=>
    {
        const{productTitle,images,productPrice,productContent}=data
        const formData=new FormData();
        try
        {
formData.append('productTitle',productTitle);
formData.append('images',images[0]);
formData.append('productPrice',productPrice);
formData.append('productContent',productContent);

const results=axios.post(`https://botiga-kvf9.onrender.com/product/createProduct,formData`,
    {
        headers:{
        "Content-Type":"multipart/form-data"
    }
}
)
        }
        catch(error)
        { 
            console(error);
        }

    }
    return(
        <div>
            <form className="forms" onsubmit={handleSubmit(onsubmit)}>
   
    <input type="text" id="productTitle" name="productTitle" placeholder="Enter product title"
    {...register('productTitle',{required:true})}
    /><br></br>

   
    <input type="file" id="images" name="images"  required 
    {...register('images',{required:true})}
    /><br></br>
    
   
    <input type="text" id="productPrice" name="productPrice" placeholder="Enter product price" 
    {...register('productPrice',{required:true})}
    /><br></br>
    
    
    <textarea id="productContent" name="productContent" placeholder="Enter product content"
    {...register('productContent',{required:true})}
    ></textarea><br></br>
    
    
    <button type="submit">Create Product</button>

</form>
</div>
    )
}
export default HomeProduct;