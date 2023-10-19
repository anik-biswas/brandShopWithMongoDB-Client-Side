import { Link } from "react-router-dom";

const Card = ({brand}) => {
    const {name,bImage}=brand;
    
    return (
        <div>
            <div className="card w-72 h-64 bg-green-200">
            <figure className="w-full h-40 "><img className="w-full h-full" src={bImage} alt={name}/></figure>
            <div className="card-body">
            <h2 className="card-title text-2xl text-orange-800">{name}</h2>
            
            <div className="card-actions justify-end">
            
            <Link to={`/brand}`}><button className="btn btn-primary bg-red-500 border-none">Details</button></Link>
            </div>
            </div>
            </div>
        
        </div>
    );
};

export default Card;