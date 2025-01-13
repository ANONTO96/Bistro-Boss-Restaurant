import { useState } from 'react';
import coverImg from '../assets/shop/banner2.jpg'
import BnrCover from '../components/shared/BnrCover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/UseMenu';
import OrderTab from '../components/shared/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categories = ['pizza', 'soup', 'salad', 'dessert', 'drinks']

    const [menu] = useMenu()
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <BnrCover img={coverImg}
                title="order food"
                description="Take home our signature sauces, artisanal spices, and house-made delicacies—perfect for recreating your favorite flavors or gifting to food lovers."
            ></BnrCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center mt-12">
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab
                        items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;