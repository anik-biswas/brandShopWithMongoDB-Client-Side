import React from 'react';

const Special = () => {
    return (
        <div>
        <h2 className="text-5xl my-10 text-orange-600 text-center">Special Offer</h2>
        <div className="grid p-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card w-64 md:w-72  lg:w-72 bg-amber-100 shadow-xl">
         <div className="card-body">
         <p>I invite these Store to Get Your Surprise </p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12">
          <img src="https://i.ibb.co/T8kccCQ/badge.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Jhon Snow</div>
       </div>
       </div>
       </div>
        <div className="card w-64 md:w-72  lg:w-72 bg-red-100 shadow-xl">
         <div className="card-body">
         <p>I invite these Store to Get Your Surprise</p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12">
          <img src="https://i.ibb.co/rQfNKYb/2a.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Robert hook</div>
       </div>
       </div>
       </div>
        <div className="card w-64 md:w-72  lg:w-72 bg-lime-100 shadow-xl">
         <div className="card-body">
         <p>I invite these Store to Get Your Surprise</p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12">
          <img src="https://i.ibb.co/1XnW1gp/download-1.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Jonson</div>
       </div>
       </div>
       </div>
       
        </div>
    </div>
    );
};

export default Special;