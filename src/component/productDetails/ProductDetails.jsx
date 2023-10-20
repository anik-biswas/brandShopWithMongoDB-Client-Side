import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = useLoaderData() ;
    console.log(product)
    const {_id, name, bName,price,rating,category,description,pImage } = product;
    const [brands,setBrand] = useState([]);
    useEffect ( () => {
        fetch('http://localhost:5000/brand')
        .then (res => res.json())
        .then(data =>setBrand(data))
        
    },[])
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
                    <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                    
                </div>
        </div>
    );
};

export default ProductDetails;