import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = useLoaderData() ;
    const{user}= useContext(AuthContext);
  const [userData, setUserData] = useState(null);
        const email =user.email;
  
    console.log(product)
    const {_id, name, bName,price,rating,category,description,pImage } = product;
    
    const handleCart = event => {
        event.preventDefault();

        const newCart = { email, name, bName,price,rating,category,description,pImage }

        console.log(newCart);

        // // send data to the server
        fetch('https://server-management-ihlospi5u-anik-biswas-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Cart update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
                
          })
          .catch( error=>{
            console.error(error);
            toast.error('Product does not add.');
        })
    }

    return (
        <div>
            <div className="card lg:card-side bg-lime-100 shadow-xl">
                <figure><img src={pImage} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-slate-500">{name}</h2>
                    <h2 className="card-title text-red-400">Brand : {bName}</h2>
                    <h2 className="card-title">Category : {category}</h2>
                    <h2 className="card-title">Price : {price}</h2>
                    <h2 className="card-title">Rating : {rating}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleCart} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                    
                </div>
        </div>
    );
};

export default ProductDetails;