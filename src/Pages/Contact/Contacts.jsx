import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import FAQ from '../Home/FAQ';
import Newsletter from '../Home/Newsletter';

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
        {/* FAQ section */}
        <FAQ />

        {/* Newsletter section */}
        <Newsletter />

        {/* Contact section */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 my-14 items-start'>
          {/* Social Icon */}
          <div className='bg-green-50 p-5 md:p-10 rounded-3xl shadow border border-green-100 space-y-8'>
            <div className='space-y-4'>
              <h3 className='text-xl font-bold text-green-800 mb-2'>Contact Information</h3>
              <p className='flex items-center gap-2 text-green-700  font-sans'><FaPhoneAlt /> +8801882585833</p>
              <p className='flex items-center gap-2 text-green-700 '><FaEnvelope /> mohammadnaim.dev@gmail.com</p>
              <p className=" text-gray-600 mt-2">Office Hours: 9 AM - 6 PM (Sat - Thu)</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-green-200 shadow-sm">
              <h4 className="text-green-800 font-semibold mb-2 text-sm">Visit Our Store</h4>
              <p className="text-sm text-gray-600 mb-2">123 NatureGlow Avenue, Dhaka, Bangladesh</p>
              <iframe
                className="w-full h-32 rounded-md"
                src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <h3 className='text-lg font-bold text-green-800 mb-2'>Follow Us</h3>
              <div className='flex flex-wrap gap-3'>
                <a href="https://www.facebook.com/farhanadnan.farabi.5" className='w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition'><FaFacebookF /></a>
                <a href="" className='w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition'><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/md-abu-naim/" className='w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition'><FaLinkedinIn /></a>
                <a href="" className='w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition'><FaTwitter /></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className='bg-white p-5 md:p-8 rounded-3xl shadow space-y-5 border border-green-100'>
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
    </div>
  );
};

export default Contacts;