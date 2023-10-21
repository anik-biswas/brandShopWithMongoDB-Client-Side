import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";

const CartList = () => {
    const location = useLocation();
    const navigate = useNavigate();
   // const carts = useLoaderData() ;
    const{user}= useContext(AuthContext);
    
   // console.log(cart);
    // const { email, name, bName,price,rating,category,description,pImage }= cart;
    
    const email = user.email;
   // console.log(email)
            const [carts, setCarts] = useState([]);
            const [filterCarts, setFilteredCart] = useState([]);
                
            useEffect(() => {
                fetch('https://server-management-37uu8jgqf-anik-biswas-projects.vercel.app/cart')
                    .then((res) => res.json())
                    .then((data) => {
                        setCarts(data);
                        filteredCarts(data, email);
                    });
            }, [email]);
            // const filteredCarts = carts.filter((cart) => {
            // return cart.email === email;
            // });
            const filteredCarts= (carts, email) => {
                const filtered = carts.filter((cart) => cart.email === email);
                setFilteredCart(filtered);
            };

            console.log(filterCarts);

            // const [updateCart, setUpdateCart] = useState(filteredCarts);

            const handleDelete = id => {
                console.log(id)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Delete Product won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
        
                        fetch(`https://server-management-37uu8jgqf-anik-biswas-projects.vercel.app/cart/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount > 0) {
                                    Swal.fire(
                                        'Deleted!',
                                        'Your cart has been deleted.',
                                        'success'
                                    )
                                    const remainingCart = filterCarts.filter(cart => cart._id !== id);
                                    setFilteredCart(remainingCart);
                            
                                }
                            })
        
                    }
                })
            }

    return (
        <div>
            <div>
            <h2 className="font-bold text-xl text-center">Cart List</h2>
            <div className="overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-red-400">Name</th>
                            <th className="text-red-400">image</th>
                            <th className="text-red-400">Brand Name</th>
                            <th className="text-red-400">Category</th>
                            <th className="text-red-400">Price</th>
                            <th className="text-red-400">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterCarts.map((cart, index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <th className="text-xs">{cart.name}</th>
                                <th><img src={cart.pImage}  className="w-10 md:w-16  h-10 md:h-16" alt="" /></th>
                                <td>{cart.bName}</td>
                                <td>{cart.category}</td>
                                <td>{cart.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(cart._id)}
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