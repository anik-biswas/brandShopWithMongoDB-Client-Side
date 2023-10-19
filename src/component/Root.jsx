import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Root = () => {
    const name = location?.state?.name || null;
    return (
        <div className="p-5 ">
            <Navbar  name={name}></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;