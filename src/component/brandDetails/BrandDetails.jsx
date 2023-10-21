import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ImageCard from "./ImageCard";
import NoProduct from "./NoProduct";

const BrandDetails = () => {
    const brand = useLoaderData();
    const {name,image1,image2,image3} = brand;
    console.log(name);
    // const [products,setProducts] = useState([]);
    // useEffect ( () => {
    //     fetch(`https://server-management-dx4fsl1j9-anik-biswas-projects.vercel.app/product`)
    //     .then (res => res.json())
    //     .then(data =>setProducts(data))
        
    // },[bName])
    const [products, setProducts] = useState([]);
    
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://server-management-dx4fsl1j9-anik-biswas-projects.vercel.app/product')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                filterProductsByBrand(data, name);
            });
    }, [name]);
    
    const filterProductsByBrand = (products, name) => {
        const filtered = products.filter((product) => product.bName === name);
        setFilteredProducts(filtered);
    };

   // console.log(filteredProducts);
   
    return (
        <div>
            <div className="carousel w-full h-96 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute inset-0 flex  justify-between items-center text-center">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    
                </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full " />
                    <div className="absolute inset-0 flex  justify-between items-center text-center">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    
                </div>
                </div> 
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 p-8 justify-items-center  mt-10">
            {
                filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        
                        <ImageCard product={product} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} key={product._id} />
                    ))
                ) : (
                    <NoProduct></NoProduct>
                )
            }
    </div>
        </div>
    );
};

export default BrandDetails;