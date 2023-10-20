import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import { toast } from "react-toastify";

const Navbar = ({name}) => {

    const{user,logout}= useContext(AuthContext);
    const navigate =useNavigate();
    const location = useLocation();
    console.log(name);
    const handleSignOut =() =>{
          logout()
          .then(result=>{
            
            console.log("logout")
            toast.success('Logout successful!'); 
            navigate(location?.state ? location.state : '/');
            
        })
          .catch()
    }

                const  links = <>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block" ><NavLink to="/"  >Home</NavLink></li>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block"><NavLink to="/AddMobile">Add Product</NavLink></li>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block"><NavLink to="/about">My Cart</NavLink></li>
                <li className="mr-5 text-lg font-medium hidden md:block lg:block"><NavLink to="/user">Users</NavLink></li>
            </>
         const  linksTab = <>
                 <li className="mr-5 " ><NavLink to="/"  >Home</NavLink></li>
                 <li className="mr-5 "><NavLink to="/addMobile">Add Product</NavLink></li>
                 <li className="mr-5 "><NavLink to="/about">My Cart</NavLink></li>
                 <li className="mr-5 "><NavLink to="/user">Users</NavLink></li>
             </>
    return (
        <div>
            <div className="navbar bg-base-100 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {linksTab}

                    </ul>
                    </div>
                    <img className="w-20 h-20" src="https://i.ibb.co/WtsvjMw/pngtree-mobile-phone-shop-logo-png-image-5430156.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Mobile Store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end mx-5">
                
                     <div>
                     {/* <div className="dropdown dropdown-end">
                             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                 <div className="w-10 rounded-full">
                                 <img src="" />
                                 </div>
                             </label>
                               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                 <li>
                                 <a className="justify-between">
                                     {name}
                                     <span className="badge">New</span>
                                 </a>
                                 </li>
                                 
                               </ul>
                     </div> */}
                            
                    {user?
                                 <div className="flex">
                                 {/* <a className="btn w-10">{user.displayName?user.displayName :user.email}</a> */}
                                 {name && <a className="btn w-10">{name}</a>}
                                 <a onClick={handleSignOut} className="btn ">  SignOut</a></div>
                                 :
                                 <Link to={"/login"}><a className="btn">Login</a></Link> 
                    }
                     </div>

                </div>

                </div>
        </div>
    );
};

export default Navbar;