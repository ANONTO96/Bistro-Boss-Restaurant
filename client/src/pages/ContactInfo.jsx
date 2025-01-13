import React, { useContext } from 'react';
import BnrCover from '../components/shared/BnrCover';
import Heading from '../components/shared/heading';
import bnr from '../../src/assets/contact/banner.jpg'
import { AuthContext } from '../providers/Authprovider';
import toast from 'react-hot-toast';

const ContactInfo = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <BnrCover title={'contact us'}
                description={'Would you like to try a dish?'}
                img={bnr}></BnrCover>
            <Heading heading={'our location'}
                subHeading={'Visit Us'}></Heading>
            <div className='md:flex justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-orange-400 md:w-[240px] lg:w-[400px] w-[95%] mx-auto flex justify-center py-10 rounded-xl'>
                        <img className='w-6' src="https://img.icons8.com/?size=100&id=47813&format=png&color=000000" alt="" />
                    </div>
                    <div className='md:h-[160px] my-5 w-80 md:w-[240px] lg:w-[400px] flex flex-col items-center'>
                        <h2 className='text-gray-700 font-semibold uppercase'>phone</h2>
                        <p className='text-gray-500 text-center'>+38 (012) 34 56 789</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-orange-400 md:w-[240px] lg:w-[400px] w-[95%] mx-auto flex justify-center py-10 rounded-xl'>
                        <img className='w-6' src="https://img.icons8.com/?size=100&id=ngwSALX7bAP3&format=png&color=000000" alt="" />
                    </div>
                    <div className='md:h-[160px] my-5 w-80 md:w-[240px] lg:w-[400px] flex flex-col items-center'>
                        <h2 className='text-gray-700 font-semibold uppercase'>address</h2>
                        <p className='text-gray-500 text-center'>1: House 12, Road 4, Block B, Banani, Dhaka-1213, Bangladesh.</p>
                        <p className='text-gray-500 text-center'>2: 45/2, Mohammadpur Road, Near Taltola Market, Dhaka-1207, Bangladesh.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-orange-400 md:w-[240px] lg:w-[400px] w-[95%] mx-auto flex justify-center py-10 rounded-xl'>
                        <img className='w-6' src="https://img.icons8.com/?size=100&id=Q2Z_87XagrYH&format=png&color=000000" alt="" />
                    </div>
                    <div className='md:h-[160px] my-5 w-80 md:w-[240px] lg:w-[400px] flex flex-col items-center'>
                        <h2 className='text-gray-700 font-semibold uppercase'>working hour</h2>
                        <p className='text-gray-500 text-center'>Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <Heading
                heading={'Feedback form'}
                subHeading={'---Send Us a Message---'}></Heading>
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name*
                                </label>
                                <input
                                value={user?.displayName}
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 outline-none"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email*
                                </label>
                                <input disabled
                                Value={user?.email}
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 outline-none"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                Phone*
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 outline-none"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 outline-none resize-none"
                                placeholder="Write your message here"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-6 flex items-center">
                            <input type="checkbox" id="terms" className="mr-2 accent-blue-500" /> {/* Added accent color */}
                            <label htmlFor="terms" className="text-gray-700">I'm not a robot</label>
                            <div className="ml-auto"> {/* Added ml-auto to push reCAPTCHA to the right */}
                                {/* Placeholder for reCAPTCHA - you'll need to integrate a real reCAPTCHA library */}
                                <div className="border p-2 rounded">reCAPTCHA</div>
                            </div>
                        </div>

                        <div className="mt-6 text-center"> {/* Centered the button */}
                            <button onClick={()=>toast.success('Thanks for your valuable suggestion')} type="submit" className="btn bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-6 rounded-md w-full md:w-auto">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default ContactInfo;