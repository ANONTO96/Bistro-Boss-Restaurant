import { Link } from 'react-router-dom';
import BnrCover from './BnrCover';
import MenuCard from './MenuCard';

const MenuCategory = ({ items, title, description, coverImg }) => {
    return (
        <div>
            {title &&
                <BnrCover
                    img={coverImg}
                    title={title}
                    description={description}>
                </BnrCover>
            }
            <div className="grid md:grid-cols-2 gap-7 mt-8 w-[90%] lg:w-[85%] mx-auto">
                {
                    items.map(item => <MenuCard key={item._id}
                        item={item}></MenuCard>)
                }
            </div>
            <div className='flex justify-center mt-6'>
            {
                title? 
                <Link to={`/order/${title}`} className="btn border-b-4  btn-outline text-black">Order Your Desired Food</Link> : 
                <Link to={`/order/pizza`} className="btn border-b-4  btn-outline text-black">Order Your Desired Food</Link>
            }
            </div>
        </div>
    );
};

export default MenuCategory;