import Heading from "../components/shared/heading";
import { Helmet } from 'react-helmet-async';
import BnrCover from "../components/shared/BnrCover";
import bnrCoverImg from '../assets/menu/banner3.jpg'
import useMenu from "../Hooks/UseMenu";
import MenuCategory from "../components/shared/MenuCategory";
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'


const FullMenu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered');
    const popular = menu.filter(item => item.category === 'popular');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <BnrCover 
            img={bnrCoverImg}
            title="Our Menu"
            description="Discover a menu crafted with fresh, local ingredients, offering a perfect blend of classic favorites and bold flavors to satisfy every craving.">
            </BnrCover>

            {/* todays offer */}
            <div className="py-6 mx-auto">
            <Heading
                heading="Today's Offer"
                subHeading="Don't miss"></Heading>
            <MenuCategory items={offered}></MenuCategory>
            </div>

            {/* popular */}
            <div className="py-6 mx-auto">
            <Heading
                heading="From Our Menu"
                subHeading="Popular Items"></Heading>
            <MenuCategory items={popular}
            ></MenuCategory>
            </div>

            {/* pizza */}
            <div className="py-6 mx-auto">
            <Heading
                heading="Pizza"
                subHeading="Grab Yours"></Heading>
            <MenuCategory items={pizza}
            title="pizza"
            description="Our pizzas are crafted with hand-tossed dough, rich tomato sauce, and premium toppings, baked to perfection for a crispy crust and irresistible flavor in every slice."
            coverImg={pizzaImg}></MenuCategory>
            </div>

            {/* soup */}
            <div className="py-6 mx-auto">
            <Heading
                heading="soup"
                subHeading="Grab Yours"></Heading>
            <MenuCategory items={soup}
            title="soup"
            description="Savor our comforting soups, made from scratch with fresh, seasonal ingredients, offering a warm and flavorful experience in every spoonful."
            coverImg={soupImg}></MenuCategory>
            </div>

            {/* salad */}
            <div className="py-6 lg:w-[90%] mx-auto">
            <Heading
                heading="Salad"
                subHeading="Grab Yours"></Heading>
            <MenuCategory items={salad}
            title="salad"
            description="Enjoy vibrant, crisp salads featuring fresh greens, colorful vegetables, and zesty dressings, perfectly balanced for a refreshing bite."
            coverImg={saladImg}></MenuCategory>
            </div>

            {/* dessert */}
            <div className="py-6 mx-auto">
            <Heading
                heading="Dessert"
                subHeading="Grab Yours"></Heading>
            <MenuCategory items={dessert}
            title="dessert"
            description="Treat yourself to our indulgent desserts, carefully prepared to deliver rich flavors and sweet satisfaction in every delightful bite."
            coverImg={dessertImg}></MenuCategory>
            </div>
            
        </section>
    );
};

export default FullMenu;