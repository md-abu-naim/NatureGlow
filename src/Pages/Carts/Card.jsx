import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ cartItems, setCartItems }) => {

    const handleDeleteCart = id => {

        const UpdateCart = cartItems.filter(item => item.id !== id)
        setCartItems(UpdateCart)

        localStorage.setItem("cart", JSON.stringify(UpdateCart))
    }
    return (
        <div className='lg:col-span-2 space-y-4 p-5 rounded-xl bg-green-100'>
            {
                cartItems?.map(item => <div key={item.id} className='flex flex-col md:flex-row text-center md:text-start items-center p-4 gap-4 shadow-md rounded-xl border border-green-600'>
                    <img className='w-28 h-28 object-cover rounded-xl border border-green-500' src={item.image} alt="" />
                    <div className='flex-1'>
                        <h2 className='text-lg font-semibold text-green-700'>{item.name}</h2>
                        <p className='text-sm text-gray-700 font-medium italic'>{item.category}</p>
                        <p className='text-md font-semibold text-green-800'>$ {item.price}.00</p>
                        <Link to={`/details/${item.id}`} className="inline-block mt-2 px-3 py-1 text-sm bg-green-700 text-white rounded hover:bg-green-800 transition">View Details</Link>
                    </div>
                    <button onClick={() => handleDeleteCart(item.id)} className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all'><FaTrashAlt className="w-5 h-5" /></button>
                </div>
                )
            }
        </div>
    );
};

export default Card;