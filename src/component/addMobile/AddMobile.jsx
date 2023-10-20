import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const AddMobile = () => {
    const location= useLocation();
    const navigate= useNavigate();
    const [brands,setBrand] = useState([]);
    useEffect ( () => {
        fetch('http://localhost:5000/brand')
        .then (res => res.json())
        .then(data =>setBrand(data))
        
    },[])
    // //console.log(brands);
    // brands.map(brand =>{
    //     console.log(brand.name)
    // })
    const handleAddMobile = event => {
        event.preventDefault();

        const form = event.target;
        const selectElement = document.getElementById("brandSelect");
        
        const name = form.name.value;
        const bName = selectElement.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const pImage = form.pImage.value;

        const newProduct = { name, bName,price,rating,category,description,pImage }

        console.log(newProduct);

        // // send data to the server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
                navigate(location?.state ? location.state : '/');
          })
    }

    return (
        <div>
            <div className="bg-[#CBE4E9] p-24">
            <div className=" grid grid-cols-2 ">
            <h2 className="text-3xl font-extrabold">Add a Mobile</h2>
            <p className="text-right">Make Your Own brand ?  <Link to="/addBrand" className="label-text-alt link link-hover text-lg text-orange-600">Add Brand</Link></p>
            </div>
            <form onSubmit={handleAddMobile}>
               
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                        <select className="select   input input-bordered w-full" id="brandSelect" required>
                           
                        {brands.map((brand, index) => (
                                <option key={index}   value={brand.name}>
                                    {brand.name}
                                </option>
                                ))}
                            
                         </select>
                        </label>
                    </div>
                </div>
               
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
               
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating 0 to 5"  min="0"
                           max="5" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Types Of Product</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Computer/Mobile/electronics" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pImage" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
        </div>
        </div>
    );
};

export default AddMobile;