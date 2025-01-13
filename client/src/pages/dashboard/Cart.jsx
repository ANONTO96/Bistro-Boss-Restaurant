import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { AuthContext } from "../../providers/Authprovider";
import Heading from "../../components/shared/heading";

const Cart = () => {
  const { user } = useContext(AuthContext)
  const [items, setItems] = useState([])
  // price counting through array via 'reduce'
  const totalPrice = items.reduce((total, item)=> total + item.price, 0)

  useEffect(() => {
    fetchAllItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, items])
  const fetchAllItem = async () => {
    const { data } = await axios.get(`http://localhost:5000/carts/${user?.email}`)
    setItems(data)
  }

  return (
    <>
      <Heading heading={'your orders'}
        subHeading={'“Congratulations on placing your order! 🎉 Sit back, relax, and let us handle the rest.Bon appétit!”'}></Heading>
      <section className='container lg:w-[75%] px-4 mx-auto py-12'>
        <div className="flex justify-between items-center">
          {/* total order */}
          <div className='flex items-center justify-around gap-2'>
            <h2 className='text-lg font-medium'>My Orders:</h2>

            <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
              {items.length} Items
            </span>
          </div>

          {/* total price */}
          <div className='flex items-center gap-x-3'>
            <span className='px-3 py-1 text-md text-blue-500 font-semibold bg-blue-100 rounded-full '>
              Total Price:{totalPrice}
            </span>
          </div>
          <button className="btn btn-warning">Pay<img className="w-6" src="https://img.icons8.com/?size=100&id=cTnRdCCVlmsb&format=png&color=000000" alt="" /></button>
        </div>

        <div className='flex flex-col my-6'>
          <div className='-mx-4 -my-2 overflow-x-auto lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-8 text-sm font-normal  text-left rtl:text-right text-gray-500'
                      >
                        Item
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Name</span>
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-2'>
                          <span>Price</span>
                        </div>
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'
                      >
                        Delivery
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                    {/* generate dynamic tr */}
                    {
                      items.map(item =>
                        <tr key={item._id}>
                          <td className='px-2 py-2  whitespace-nowrap'>
                            <img className="w-20 h-20 rounded-full border border-gray-400 p-1" src={item.image} alt="" />
                          </td>

                          <td className='px-3 py-3 text-sm text-gray-500  whitespace-nowrap'>
                            {item.name}
                          </td>

                          <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{item.price}
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap'>
                            <div
                              className={`text-center rounded-3xl ${item.status === 'delivered' && 'text-green-500 bg-green-100'
                                } ${item.status === 'failed' && 'text-red-500 bg-red-100'
                                } ${item.status === 'pending' && 'text-yellow-500 bg-yellow-100'
                                }`}
                            >
                              {item.status}
                            </div>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;