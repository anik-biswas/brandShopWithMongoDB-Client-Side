import { Link } from "react-router-dom";

const ImageCard = ({product}) => {
    const { name, bName,price,rating,category,description,pImage }= product;
    return (
        <div className="card card-side h-68  bg-lime-100 shadow-xl">
            <figure className="h-full"><img src={pImage} alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="text-orange-500 text-lg font-semibold">{bName}</h3>
                <p className="font-bold text-lg">{category}</p>
                
                <p className="font-bold text-lg">price: {price}$</p>
                <div className="flex gap-2">
                {rating}
                <img src="https://i.ibb.co/3YL4VBc/png-transparent-favorite-mark-opinion-rating-star-simple-lines-icon.png" alt="" className="h-5 w-5"/>
                </div>
                <div className="card-actions grid grid-cols-2 justify-end">
                <button className="btn btn-primary p-5">Detail</button>
                <button className="btn btn-primary p-5">Update</button>
                </div>
            </div>
            </div>

    );
};

export default ImageCard;