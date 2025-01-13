import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";
import axios from "axios";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetchCartItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, items])
    const fetchCartItem = async() =>{
        const {data} =await axios.get(`http://localhost:5000/carts/${user?.email}`)
        setItems(data)
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/order/pizza'>Order Food</Link></li>
        <li><Link to='/full-menu'>Our Menu</Link></li>
        <li>
            <details>
                <summary>Our shop</summary>
                <ul className="p-2">
                    <li><Link to='/contact'>Address 1</Link></li>
                    <li><Link to='/contact'>Address 2</Link></li>
                </ul>
            </details>
        </li>
        <li>
            {
                user && <Link to={`/dashboard/cart/${user?.email}`} className="flex items-center gap-1 w-fit border px-2 py-1 rounded-2xl">
                <img className="w-6" src="https://img.icons8.com/?size=100&id=NUcpUMIcTSZ3&format=png&color=000000" alt="" />
                <div className="badge badge-secondary">+{items.length}</div>
            </Link>
            }
        </li>
    </>
    return (
        <div className="navbar fixed lg:right-[10%] lg:left-[10%] lg:w-auto z-10 bg-opacity-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 bg-opacity-45 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl text-white">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-300 font-semibold">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user && (
                        <><Link to='/login' className="btn bg-opacity-35">Log In</Link>
                            <Link to='/register' className="btn bg-opacity-35">Register</Link>
                        </>)
                }
                {user && (
                    <div className='dropdown bg-gray-300 rounded-full dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/dashboard'>Profile Dashboard</Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/cart/${user?.email}`} className="flex items-center gap-1 w-fit border border-gray-300 px-2 py-1 rounded-2xl">
                                    <img className="w-6" src="https://img.icons8.com/?size=100&id=NUcpUMIcTSZ3&format=png&color=000000" alt="" /> My
                                    Orders
                                    <div className="badge badge-secondary">+{items.length}</div>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <button
                                    onClick={logOut}
                                    className='bg-gray-200 block text-center'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;