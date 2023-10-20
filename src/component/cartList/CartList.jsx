import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const CartList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const carts = useLoaderData() ;
    const{user}= useContext(AuthContext);
   // console.log(cart);
    // const { email, name, bName,price,rating,category,description,pImage }= cart;
    
    const email = user.email;
   // console.log(email)

            const filteredCarts = carts.filter((cart) => {
            return cart.email === email;
            });
            console.log(filteredCarts);
    return (
        <div>
            <div>
            <h2 className="font-bold text-xl text-center">User List</h2>
            <div className="overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>image</th>
                            <th>Brand Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredCarts.map((cart, index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <th>{cart.name}</th>
                                <th><img src={cart.pImage}  className="w-16 h-16" alt="" /></th>
                                <td>{cart.bName}</td>
                                <td>{cart.category}</td>
                                <td>{cart.price}</td>
                                <td>
                                    <button
                                         className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default CartList;