import Navber from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='bg-white text-black font-serif'>
            <Navber />

            <div className='min-h-[calc(100vh-415px)]'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;