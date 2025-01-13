import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import ContactUs from "../components/ContactUs";
import Featured from "../components/Featured";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";
import BnrCover from "../components/shared/BnrCover";
import bnr from '../assets/home/chef-service.jpg'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="md:w-[90%] lg:w-[70%] mx-auto my-10">
                <Category></Category>
            </div>
            <BnrCover title={'Bistro Boss'}
            description={`Delicious bistro fare without the high price tag. We offer generous portions of flavorful dishes made with quality ingredients, all in a warm and welcoming environment. Bistro Boss is the smart choice for a satisfying meal that won't break the bank.`}
            img={bnr}></BnrCover>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;