import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
const ImageCard = ({product,filteredProducts, setFilteredProducts}) => {
    const { _id,name, bName,price,rating,category,description,pImage }= product;
    const handleDelete = _id => {
       // console.log(_id);
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

                fetch(`http://localhost:5000/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = filteredProducts.filter(prod => prod._id !== _id);
                             setFilteredProducts(remaining);
                    
                        }
                    })

            }
        })
    }
    return (
        <div className="card card-side w-80 md:w-full lg:w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-cyan-100 shadow-xl">
            <figure><img src={pImage} alt="Movie" /></figure>
            <div className=" flex justify-between w-full px-4 py-5">
                <div className="space-y-2">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="text-orange-500 text-lg font-semibold">{bName}</p>
                    <p className="text-lg font-semibold">{category}</p>
                    <p className="text-lg font-semibold">Price: {price}</p>
                    <div className="flex gap-2 text-lg font-semibold">
                {rating}
                <img src="https://i.ibb.co/3YL4VBc/png-transparent-favorite-mark-opinion-rating-star-simple-lines-icon.png" alt="" className="h-5 w-5"/>
                </div>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn w-20 bg-slate-200">View</button>
                        <Link  to={`/updateProduct/${_id}`}><button className="btn w-20 bg-red-300">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn w-20 bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ImageCard;