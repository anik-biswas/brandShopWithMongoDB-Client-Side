import { Link } from "react-router-dom";

const ImageCard = ({product}) => {
    const { name, bName,price,rating,category,description,pImage }= product;
    return (
        <div className="card card-side bg-cyan-100 shadow-xl">
            <figure><img src={pImage} alt="Movie" /></figure>
            <div className="flex justify-between w-full px-4 py-5">
                <div className="space-y-2">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="text-orange-500 text-lg font-semibold">{bName}</p>
                    <p className="text-lg font-semibold">{category}</p>
                    <p className="text-lg font-semibold">Price: {price}</p>
                    <div className="flex gap-2 text-lg font-semibold">
                {rating}
                <img src="https://i.ibb.co/3YL4VBc/png-transparent-favorite-mark-opinion-rating-star-simple-lines-icon.png" alt="" className="h-5 w-5"/>
                </div>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn w-20 bg-slate-200">View</button>
                        <Link >
                        <button className="btn w-20 bg-red-300">Edit</button>
                        </Link>
                        <button
                           
                            className="btn w-20 bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ImageCard;