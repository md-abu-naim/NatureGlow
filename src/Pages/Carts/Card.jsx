import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ cartItems, setCartItems }) => {

    const handleDeleteCart = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            background: '#dcfce7',
            color: '#000000',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            buttonsStyling: false,
            customClass: {
                popup: 'rounded-lg shadow-lg',
                title: 'text-lg font-semibold text-yellow-400',
                htmlContainer: 'text-sm text-gray-300',
                confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2',
                cancelButton: 'bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const UpdateCart = cartItems.filter(item => item._id !== id)
                setCartItems(UpdateCart)

                localStorage.setItem("cart", JSON.stringify(UpdateCart))
                window.dispatchEvent(new Event("cartUpdated"));

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    background: '#dcfce7',
                    timer: 800
                });
            }
        });
    }
    return (
        <div className='lg:col-span-2 space-y-4 p-5 rounded-xl bg-green-100'>
            {
                cartItems?.map(item => <div key={item._id} className='flex flex-col md:flex-row text-center md:text-start items-center p-4 gap-4 shadow-md rounded-xl border border-green-600'>
                    <img className='w-28 h-28 object-cover rounded-xl border border-green-500' src={item.image} alt="" />
                    <div className='flex-1'>
                        <h2 className='text-lg font-semibold text-green-700'>{item.name}</h2>
                        <p className='text-sm text-gray-700 font-medium italic'>{item.category}</p>
                        <p className='text-md font-semibold text-green-800'>$ {item.price}.00</p>
                        <Link to={`/details/${item._id}`} className="inline-block mt-2 px-3 py-1 text-sm bg-green-700 text-white rounded hover:bg-green-800 transition">View Details</Link>
                    </div>
                    <button onClick={() => handleDeleteCart(item._id)} className='bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all'><FaTrashAlt className="w-5 h-5" /></button>
                </div>
                )
            }
        </div>
    );
};

export default Card;