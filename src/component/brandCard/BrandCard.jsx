import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const BrandCard = () => {
    const loadedBrands = useLoaderData();
    const [brands, setBrand] = useState(loadedBrands);
    console.log(brands.length);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 justify-items-center  mt-10">
        {
            
            brands.map(brand => <Card brand={brand} key={brand._id}></Card>)
        }
    </div>
    );
};

export default BrandCard;