import useAuth from "../../../Hooks/useAuth";

const AddressBook = () => {
    const {user} = useAuth()

    const handleAddressBook = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const address = form.address.value
        const note = form.note.value
        const addressBook = {name, email, phone, address, note}
        console.log(addressBook);
    }
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
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="name" placeholder="Enter full name" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Email (Optional)</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' defaultValue={user?.email} type="email" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Phone Number</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="number" name="phone" placeholder="Enter phone number" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Address</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="address" placeholder="Enter Full address" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'> Any note? (Optional)</label>
                        <textarea className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' name="note" placeholder="Write your note here" ></textarea>
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