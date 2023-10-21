import Banner from "../banner/Banner";
import BrandCard from "../brandCard/BrandCard";
import Special from "../special/Special";
import SuperSell from "../supersell/SuperSell";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <BrandCard></BrandCard>
           <Special></Special>
           <SuperSell></SuperSell>
        </div>
    );
};

export default Home;