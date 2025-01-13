import React from 'react';
import ItemCard from './ItemCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-12'>
            {
                items.map(item => <ItemCard
                    key={item._id}
                    item={item}></ItemCard>)
            }
        </div>
    );
};

export default OrderTab;