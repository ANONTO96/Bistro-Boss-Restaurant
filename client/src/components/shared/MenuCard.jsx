
const MenuCard = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className="flex space-x-4 px-2">
            <img className="w-[80px] h-[80px] rounded-full border-2 border-red-300 p-1" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuCard;