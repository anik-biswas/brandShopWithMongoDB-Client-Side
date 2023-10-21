import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./footer/Footer";

const Root = () => {
    const name = location?.state?.name || null;
    return (
        <div className="p-5 ">
            <Navbar  name={name}></Navbar>
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;