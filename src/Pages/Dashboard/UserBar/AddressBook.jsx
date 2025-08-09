import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import parsePhoneNumberFromString from "libphonenumber-js";
import Swal from "sweetalert2";

const AddressBook = () => {
    const [currentUser, setCurrentUser] = useState()
    const axiosCommon = useAxiosCommon()
    const { user } = useAuth()

    const { _id, name, email, phone, address, status } = currentUser || {}
    console.log(status);

    const handleAddressBook = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const address = form.address.value
        const addressBook = { ...currentUser, name, email, phone, address }
        console.log(addressBook);
        const phoneNumber = parsePhoneNumberFromString(phone, 'BD')
        if (phoneNumber && phoneNumber.isValid()) {
            axiosCommon.put(`/user/${_id}`, addressBook)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Place Order Successfully!",
                            icon: "success",
                            draggable: true,
                            timer: 2300,
                            background: '#dcfce7',
                        });
                    }
                })
        } else {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please type valid phone number!",
            });
        }
    }

    useEffect(() => {
        axiosCommon.get(`/users/${user?.email}`)
            .then(res => {
                setCurrentUser(res.data)
            })
    }, [axiosCommon, user?.email])
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Your Saved Addresses</h1>
                <p className='text-green-600 text-sm mt-2'>Easily manage your shipping addresses in one place. Add, update, or delete locations to ensure smooth and fast deliveries every time you shop.</p>
            </section>

            <section className='bg-green-50 p-6 mt-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
                <form onSubmit={handleAddressBook} className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Full Name</label>
                        <input defaultValue={name} className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="name" placeholder="Enter full name" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Email (Optional)</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none cursor-not-allowed focus:ring-2 focus:ring-green-500' value={email} type="email" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Phone Number</label>
                        <input defaultValue={phone} className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="number" name="phone" placeholder="Enter phone number" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'> Address</label>
                        <textarea defaultValue={address} className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' name="address" placeholder="Enter Full address..." ></textarea>
                    </div>
                    <div className="mt-5 flex justify-end gap-4">
                        <button type="reset" className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Reset</button>
                        <button type="submit" className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">Address Book</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddressBook;