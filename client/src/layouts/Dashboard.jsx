import { useContext } from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex'>
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu'>
                    <li><NavLink className={'flex'} to="/dashboard/home"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=TZ2lKyH3LVjx&format=png&color=000000" alt="" />USER HOME</NavLink></li>
                    <li><NavLink className={'flex'} to="/dashboard/reservation"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=OR5kJTHm6aTH&format=png&color=000000" alt="" />RESERVATION</NavLink></li>
                    <li><NavLink className={'flex'} to="/dashboard/payment"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=35856&format=png&color=000000" alt="" />PAYMENT HISTORY</NavLink></li>
                    <li><NavLink className={'flex'} to={`/dashboard/cart/${user?.email}`}><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000" alt="" />MY CART</NavLink></li>
                    <li><NavLink className={'flex'} to="/dashboard/review"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=93118&format=png&color=000000" alt="" />ADD REVIEW</NavLink></li>
                    <li><NavLink className={'flex'} to="/dashboard/booking"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=14159&format=png&color=000000" alt="" />MY BOOKING</NavLink></li>
                    <div className='divider'></div>
                    <li><NavLink className={'flex'} to="/"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=TZ2lKyH3LVjx&format=png&color=000000" alt="" />HOME</NavLink></li>
                    <li><NavLink className={'flex'} to="/order/pizza"><img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=KnyeXYVh5bUe&format=png&color=000000" alt="" />MENU</NavLink></li>
                </ul>
            </div>
            
            {/* content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;