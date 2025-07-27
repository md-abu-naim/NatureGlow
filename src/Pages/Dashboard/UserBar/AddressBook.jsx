
const AddressBook = () => {
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Your Saved Addresses</h1>
                <p className='text-green-600 text-sm mt-2'>Easily manage your shipping addresses in one place. Add, update, or delete locations to ensure smooth and fast deliveries every time you shop.</p>
            </section>

            <section className='bg-green-50 p-6 mt-6 rounded-2xl border border-green-200 shadow-sm space-y-4'>
                {/* <h1 className="text-xl font-bold text-green-700 mb-4">Fill in or update Information</h1> */}
                <form className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Full Name</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="" placeholder="Enter your full name" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Email (Optional)</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="email" name="" placeholder="Enter valid email" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Phone Number</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="" placeholder="Enter your phone number" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Address</label>
                        <input className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" name="" placeholder="Enter your address" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-green-700 mb-1'>Order note (Optional)</label>
                        <textarea className='w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' name="" placeholder="Write your order note here" ></textarea>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddressBook;