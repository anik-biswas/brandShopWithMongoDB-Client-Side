import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const AddBrand = () => {
    const location= useLocation();
    const navigate= useNavigate();
 const handleAddBrand = e =>{
    e.preventDefault();
    const form = e.target;

        const name = form.name.value;
        const bImage = form.bImage.value;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3= form.image3.value;
        
        const newBrand = { name, bImage,image1,image2,image3}

        console.log(newBrand);
        fetch('http://localhost:5000/brand',{
            method: 'POST',
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(newBrand)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Brand Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            navigate(location?.state ? location.state : '/');
        })

 }

    return (
        <div>
            <div className="hero min-h-screen bg-[#CBE4E9] ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">New Brand</h1>
                    </div>
                    <div className="card flex-shrink-0 w-96  shadow-2xl bg-[#50e6da]">
                        <form  onSubmit={handleAddBrand} className="card-body ">
                             <div className="form-control">
                            
                                <label className="label">
                                    <span className="label-text font-bold text-slate-600 text-xl">Brand Name</span>
                                </label>
                                <input  type="text"  placeholder="Full name" className="input input-bordered" name='name' required/>
                            </div> 
                            
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-slate-600 text-xl">Banner Image</span>
                                </label>
                                <input type="text"  placeholder="image url" className="input input-bordered" name='bImage'  required />
                            </div> 
                            <label className="label">
                                    <span className="label-text font-bold text-purple-900 text-xl">Add Poster Images</span>
                                </label>
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-slate-600  text-xl">Slider Image 1</span>
                                </label>
                                <input type="text"  placeholder="image url" className="input input-bordered" name='image1'  required />
                            </div> 
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-slate-600  text-xl">Slider Image 2</span>
                                </label>
                                <input type="text"  placeholder="image url" className="input input-bordered" name='image2'  required />
                            </div> 
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-slate-600  text-xl">Slider Image 3</span>
                                </label>
                                <input type="text"  placeholder="image url" className="input input-bordered" name='image3'  required />
                            </div> 
                            
                            <div className="form-control mt-6 p-0">
                                <button  className="btn btn-neutral" >Add Brand</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBrand;