import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BsBan, BsTruck } from "react-icons/bs";
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaUserPlus } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { LuPackagePlus } from "react-icons/lu";
import { useLoaderData } from 'react-router-dom';
import AreaCharts from './Charts';
// import { useState } from 'react';

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

const datas = [
    { name: "Delivered", value: 540 },
    { name: "Cancelled", value: 120 },
    { name: "Pending", value: 80 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="#fff"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
            className="text-sm font-semibold"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};



const AdminDashboard = () => {
    // const [activeTab, setActiveTab] = useState("today")
    const orders = useLoaderData()

    // const chartData = {
    //     today: [
    //         { name: '8AM', uv: 3 },
    //         { name: '10AM', uv: 5 },
    //         { name: '12PM', uv: 2 },
    //         { name: '2PM', uv: 6 },
    //         { name: '4PM', uv: 4 },
    //     ],
    //     monthly: [
    //         { name: 'Week 1', uv: 40 },
    //         { name: 'Week 2', uv: 60 },
    //         { name: 'Week 3', uv: 30 },
    //         { name: 'Week 4', uv: 50 },
    //     ],
    //     yearly: [
    //         { name: 'Jan', uv: 200 },
    //         { name: 'Feb', uv: 180 },
    //         { name: 'Mar', uv: 220 },
    //         { name: 'Apr', uv: 160 },
    //         { name: 'May', uv: 300 },
    //     ],
    // };
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-4">
                {/* Total Users */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaUsers className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">1522</h3>
                    </div>
                </div>
                {/* Daily Users */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaUserPlus className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Users</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Orders */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaShoppingCart className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Daily Orders */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <LuPackagePlus className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Orders</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Eanrnings */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FaMoneyBillWave className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Daily Eanrnings */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <FiTrendingUp className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Daily Earnings</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Delivered */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <BsTruck className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Delivered</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
                {/* Total Cancelled */}
                <div className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl flex items-center gap-4 p-5 transition-all">
                    <div className="bg-green-100 text-green-700 p-3 rounded-full shadow-inner">
                        <BsBan className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Cancelled</p>
                        <h3 className="text-2xl font-semibold text-green-800">522</h3>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div className="w-full">
                    {/* <h2 className='text-xl font-bold text-green-800'>Salles Report</h2>
                    <div className="flex gap-4 mt-3">
                        {['today', 'monthly', 'yearly'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-full font-semibold capitalize transition-all ${activeTab === tab
                                        ? 'bg-green-600 text-white shadow'
                                        : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                            width={500}
                            height={200}
                            data={chartData[activeTab]}
                            syncId="anyId"
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer> */}
                    <AreaCharts orders={orders} />
                </div>
                <div className="w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={datas}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {datas.map((entry, index) => (
                                    <Cell
                                        key={`cell-${entry.name}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;


// import { useLoaderData } from 'react-router-dom';
// import { useState } from 'react';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';
// import { LuPackagePlus } from 'react-icons/lu';

// const AdminDashboard = () => {
//   const products = useLoaderData(); // assuming it's an array
//   const totalProducts = products?.length || 0;

//   const [activeTab, setActiveTab] = useState('today');

//   // Dummy chart data for demonstration
//   const chartData = {
//     today: [
//       { name: '8AM', uv: 3 },
//       { name: '10AM', uv: 5 },
//       { name: '12PM', uv: 2 },
//       { name: '2PM', uv: 6 },
//       { name: '4PM', uv: 4 },
//     ],
//     monthly: [
//       { name: 'Week 1', uv: 40 },
//       { name: 'Week 2', uv: 60 },
//       { name: 'Week 3', uv: 30 },
//       { name: 'Week 4', uv: 50 },
//     ],
//     yearly: [
//       { name: 'Jan', uv: 200 },
//       { name: 'Feb', uv: 180 },
//       { name: 'Mar', uv: 220 },
//       { name: 'Apr', uv: 160 },
//       { name: 'May', uv: 300 },
//     ],
//   };

//   return (
//     <div className="p-6 space-y-6">

//   {/* Total Products Card */}
//   <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between border-l-4 border-green-500">
//     <div>
//       <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
//       <p className="text-2xl font-bold text-green-600">{totalProducts}</p>
//     </div>
//     <LuPackagePlus className="text-4xl text-green-500" />
//   </div>

//       {/* Tab System for Chart */}
//   <div className="space-y-4">
// <div className="flex gap-4">
//   {['today', 'monthly', 'yearly'].map((tab) => (
//     <button
//       key={tab}
//       onClick={() => setActiveTab(tab)}
//       className={`px-4 py-1.5 rounded-full font-semibold capitalize transition-all ${
//         activeTab === tab
//           ? 'bg-green-600 text-white shadow'
//           : 'bg-gray-100 text-gray-700 hover:bg-green-100'
//       }`}
//     >
//       {tab}
//     </button>
//   ))}
// </div>

//         {/* Area Chart */}
//         <div className="bg-white rounded-xl shadow p-4 h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart
//               data={chartData[activeTab]}
//               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Area
//                 type="monotone"
//                 dataKey="uv"
//                 stroke="#10B981"
//                 fill="#D1FAE5"
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
