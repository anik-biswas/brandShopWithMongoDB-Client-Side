const SuperSell = () => {
    return (
        <div>
        <h2 className="text-5xl my-10 text-orange-600 text-center ">Super Sell</h2>
        <div className="grid p-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/qrXjmYY/samsung1.png" alt="Album"/></figure>
            <div className="p-5 text-center justify-items-start">
                <h2 className="text-2xl text-center">Samsung Z3</h2>
                    <p className="text-xl text-orange-600">20% OFF </p>
                    
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/dMtM4Fs/s3.webp" alt="Album"/></figure>
            <div className="p-5 text-center justify-items-start">
                <h2 className="text-2xl text-center">Iphone 15 </h2>
                    <p className="text-xl text-orange-600">30% OFF </p>
                    
                </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/z4QJMmK/samsung2.webp" alt="Album"/></figure>
                <div className="p-5 text-center justify-items-start">
                <h2 className="text-2xl text-center">Samsung Ultra</h2>
                    <p className="text-xl text-orange-600">20% OFF </p>
                    
                </div>
                </div>
       
       </div>
       
        </div>
  
    );
};

export default SuperSell;