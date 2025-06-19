import Banner from "./Banner";
import FeaturedCategories from "./FeaturedCategories";

const Home = () => {
    return (
        <div className="md:mx-10">
            <Banner />
            <FeaturedCategories />
        </div>
    );
};

export default Home;