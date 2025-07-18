import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="bg-white font-serif text-black">
            <div className="relative min-h-screen lg:flex">
                {/* sidebar */}
                sidebar

                {/* pages */}
                <div className="flex-1 lg:ml-64">
                    <div className="p-5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;