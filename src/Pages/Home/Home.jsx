import Banner from "./Banner";
import BestSelling from "./BestSelling";
import FeaturedCategories from "./FeaturedCategories";
import NewArrivals from "./NewArrivals";
import PromoSection from "./PromoSection";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="md:mx-10">
            <Banner />
            <FeaturedCategories />
            <BestSelling />
            <NewArrivals />
            <PromoSection />
            <Testimonials />
        </div>
    );
};

export default Home;