import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "../style.css";
import Footer from "./footer/Footer";

const Root = () => {
    
    return (
        <div className="p-2 md:p-5  ">
            
            <Navbar  ></Navbar>
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;