import Heading from "./shared/heading";
import MenuCard from "./shared/MenuCard";
import { Link } from "react-router-dom";
import useMenu from "../Hooks/UseMenu";

const PopularMenu = () => {
    // from custom hook
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-10">
            <Heading
            heading="From Our Menu"
            subHeading="Popular Items"></Heading>
            <div className="grid md:grid-cols-2 gap-7">
                {
                    popular.map(item => <MenuCard key={item._id}
                    item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center">
            <Link to={'/full-menu'} className="btn border-b-4  btn-outline text-black">View Full Menu</Link>
            </div>
        </section>
    );
};

export default PopularMenu;