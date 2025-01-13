import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import axios from 'axios'

const ItemCard = ({ item }) => {
    const { name, image, price, recipe, _id} = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = food => {
        if(user && user.email){
        const cartItem = {
            menuId: _id,
            email: user.email,
            status: 'pending',
            name,
            image,
            price
        }
        axios.post('http://localhost:5000/cart', cartItem)
        .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success(`${name} added to cart`)
            }
        })
        }
        else{
            toast.error('Log In First')
            navigate('/login',{state: {from: location}})
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-2xl mx-auto mb-8">
            <figure>
                <img className='rounded-xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-gray-200 text-black font-semibold absolute right-2 border border-black rounded-2xl px-2'>{price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-center">
                <div className='mt-6'>
            <Link onClick={()=>handleAddToCart(item)} className="btn border-b-4 border-amber-600 bg-white btn-outline text-black">Order Your Desired Food</Link>
            </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;