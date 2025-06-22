import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div>

      <div className='px-4 md:px-10 py-10'>
        {/* Page Title */}
        <section className='bg-green-100 py-8 text-center rounded-lg'>
          <h1 className='text-4xl font-extrabold text-green-800'>Let’s Connect with NatureGlow</h1>
          <p className='text-green-600 text-sm mt-2'>Have questions, suggestions, or just want to say hi? We'd love to hear from you!</p>
        </section>

        {/* Main Section */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 my-14 items-start'>
          <form className='bg-white p-8 rounded-3xl shadow space-y-5 border border-green-100'>
            <div>
              <label className='block text-sm font-semibold text-green-800 mb-1'>Name</label>
              <input className='w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" placeholder='Your Name' />
            </div>
            <div>
              <label className='block text-sm font-semibold text-green-800 mb-1'>Email</label>
              <input className='w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="email" placeholder='you@example.com' />
            </div>
            <div>
              <label className='block text-sm font-semibold text-green-800 mb-1'>Subject</label>
              <input className='w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500' type="text" placeholder='Subject' />
            </div>
            <div>
              <label className='block text-sm font-semibold text-green-800 mb-1'>Message</label>
              <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <button type="submit" className="w-full  bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition duration-300 font-semibold">Send Message</button>
          </form>
        </section>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-20">
        {/* Main Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">


          {/* Contact Info & Social */}
          <div className="bg-green-50 p-8 rounded-3xl shadow border border-green-100 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Contact Information</h3>
              <p className="flex items-center gap-2 text-green-700 text-sm"><FaPhoneAlt /> +880 1234-567890</p>
              <p className="flex items-center gap-2 text-green-700 text-sm"><FaEnvelope /> support@natureglow.com</p>
              <p className="text-sm text-gray-600 mt-2">Office Hours: 9 AM - 6 PM (Sat - Thu)</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaInstagram /></a>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Contacts;