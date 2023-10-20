import { Link } from "react-router-dom";

const NoProduct = () => {
    return (
        <div className="w-screen">
            <div className="justify-items-center text-center">
            <Link to={'/addMobile'}><h2 className="font-extrabold text-xl"> Please Add Some Product </h2></Link>
        </div>
        </div>
    );
};

export default NoProduct;