import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-50 border-t border-green-100 text-gray-800 py-14 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div>
                    <img className="w-auto h-10" src='/NatureGlowLogo.png' alt="" />
                    <p className="text-sm text-gray-600">
                        Naturally crafted skincare essentials that nourish your skin and respect the planet. Ethical. Organic. You.
                    </p>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Explore</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-green-600">Home</a></li>
                        <li><a href="#" className="hover:text-green-600">Shop</a></li>
                        <li><a href="#" className="hover:text-green-600">About Us</a></li>
                        <li><a href="#" className="hover:text-green-600">Contact</a></li>
                    </ul>
                </div>

                {/* Helpful Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Helpful Links</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-green-600">FAQs</a></li>
                        <li><a href="#" className="hover:text-green-600">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-green-600">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Get in Touch</h4>
                    <p className="text-sm mb-1">📞 +8801882585833</p>
                    <p className="text-sm mb-1">✉️ support@natureglow.com</p>
                    <p className="text-sm text-gray-600">Sat - Thu | 9:00 AM - 6:00 PM</p>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="text-green-600 hover:text-green-800 text-xl"><FaFacebookF /></a>
                        <a href="#" className="text-green-600 hover:text-green-800 text-xl"><FaInstagram /></a>
                        <a href="#" className="text-green-600 hover:text-green-800 text-xl"><FaLinkedinIn /></a>
                        <a href="#" className="text-green-600 hover:text-green-800 text-xl"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-10 border-t border-green-300 pt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} NatureGlow — Designed & Developed by <a href="https://abu-naim.netlify.app" target="_blank" className="text-green-600 underline">Mohammad Abu Naim</a>
            </div>
        </footer>
    );
};

export default Footer;