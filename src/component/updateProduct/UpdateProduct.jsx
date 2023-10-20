import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = useLoaderData() ;
    console.log(product);
    const {_id, name, bName,price,rating,category,description,pImage } = product;
    const [brands,setBrand] = useState([]);
    useEffect ( () => {
        fetch('https://server-management-ihlospi5u-anik-biswas-projects.vercel.app/brand')
        .then (res => res.json())
        .then(data =>setBrand(data))
        
    },[])

    const handleUpdateProduct = event => {
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

        const updateProduct = { name, bName,price,rating,category,description,pImage }

        //console.log(newProduct);

        fetch(`https://server-management-ihlospi5u-anik-biswas-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
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
        <h2 className="text-3xl font-extrabold">Update Product</h2>
        </div>
        <form onSubmit={handleUpdateProduct}>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                    <select className="select   input input-bordered w-full" id="brandSelect" value={bName} required>
                       {/* <option value="" defaultValue={bName}>{bName}</option> */}
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
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating 0 to 5"  min="0"
                       max="5" className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Types Of Product</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={category} placeholder="Computer/Mobile/electronics" className="input input-bordered w-full" required />
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
                        <input type="text" name="pImage" defaultValue={pImage} placeholder="Photo URL" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Product" className="btn btn-block" />

        </form>
    </div>
    </div>
    );
};

export default UpdateProduct;