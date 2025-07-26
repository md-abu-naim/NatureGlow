
const Users = () => {
    return (
        <div>
            <section className='bg-green-100 py-5 text-center rounded-lg'>
                <h1 className='text-4xl font-extrabold text-green-800'>Let’s Connect with NatureGlow</h1>
                <p className='text-green-600 text-sm mt-2'>Have questions, suggestions, or just want to say hi? We'd love to hear from you!</p>
            </section>
            <form className='w-full bg-green-100 mt-3 p-2 rounded-lg'>
                <div className='relative'>
                    <input placeholder="Search products..." className="w-full px-4 pr-16 py-2 border border-green-300 rounded-full shadow-sm focus:outline-none" type="text" name="search" />
                    <button type='submit' className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm transition">Search..</button>
                </div>
            </form>
        </div>
    );
};

export default Users;