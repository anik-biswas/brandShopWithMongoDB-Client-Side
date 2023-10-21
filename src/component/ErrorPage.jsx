import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='h-screen justify-center items-center text-center'>
        <div className='text-xl font-bold '>
            <h2 className='my-5'>OPPS! </h2>
            <h2 className="text-6xl text-red-500">404</h2>
           <Link to="/"><button className='btn my-5'>Home</button></Link> 
        </div>
        </div>
    );
};

export default ErrorPage;