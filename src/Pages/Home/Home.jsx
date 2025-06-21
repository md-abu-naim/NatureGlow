import Banner from "./Banner";
import BestSelling from "./BestSelling";
import FAQ from "./FAQ";
import FeaturedCategories from "./FeaturedCategories";
import NewArrivals from "./NewArrivals";
import Newsletter from "./Newsletter";
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
            <FAQ />
            <Newsletter />
        </div>
    );
};

export default Home;