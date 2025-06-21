import Banner from "./Banner";
import BestSelling from "./BestSelling";
import FeaturedCategories from "./FeaturedCategories";

const Home = () => {
    return (
        <div className="md:mx-10">
            <Banner />
            <FeaturedCategories />
            <BestSelling />
        </div>
    );
};

export default Home;