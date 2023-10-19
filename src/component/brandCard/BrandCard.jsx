import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const BrandCard = () => {
    const loadedBrands = useLoaderData();
    const [brands, setBrand] = useState(loadedBrands);
    console.log(brands.length);
    return (
        <div>
            {
               // brands.map(brand =><Card key={brand._id} brand={brand}></Card>)
            }
        </div>
    );
};

export default BrandCard;