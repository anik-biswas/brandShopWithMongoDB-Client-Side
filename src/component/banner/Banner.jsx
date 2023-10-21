const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/FXgsksz/banner1.jpg" className="w-full" />
                    <div className="absolute inset-0 flex  justify-between items-center text-center">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    
                </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3FfJn53/banner2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gyD2nNZ/ba4.webp" className="w-full " />
                    <div className="absolute inset-0 flex  justify-between items-center text-center">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    
                </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/x56nXhT/b6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="text-center justify-center items-center my-10">
                <h2 className="text-xl md:text-3xl lg:text-5xl "><span className="text-amber-500">Our Brand's</span> </h2>
                <p className="text-lg text-slate-400 mt-5 px-20">As the premier Electronics company in New York City, we know that it’s not “one size fits all”. Each
                Product and customer is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            </div>
        </div>
    );
};

export default Banner;