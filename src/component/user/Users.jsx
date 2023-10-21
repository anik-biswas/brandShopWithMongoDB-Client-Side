import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
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

                fetch(`https://server-management-37uu8jgqf-anik-biswas-projects.vercel.app/user/${id}`, {
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
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                    
                        }
                    })

            }
        })
    }

    return (
        <div>
            <h2 className="font-bold text-xl text-center">User List</h2>
            <div className="overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20">
                <table className="table text-center ">
                    {/* head */}
                    <thead >
                        <tr>
                            <th></th>
                            <th className="text-red-400">Name</th>
                            <th className="text-red-400">Image</th>
                            <th className="text-red-400">Email</th>
                            <th className="text-red-400">Created At</th>
                            <th className="text-red-400">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <th>{user.name}</th>
                                <th><img src={user.image}  className="w-10 md:w-16  h-10 md:h-16" alt="" /></th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;