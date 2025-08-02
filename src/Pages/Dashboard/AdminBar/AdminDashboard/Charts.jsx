import { useState, useMemo } from "react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Bar,
    ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line,
} from "recharts";
import { format, subMonths, isWithinInterval, parseISO, subDays, subYears } from "date-fns";

export const StatusAreaChart = ({ orders }) => {
    const [activeTab, setActiveTab] = useState("today")

    const chartData = useMemo(() => {
        const now = new Date()
        let startDate;

        if (activeTab === 'today') {
            startDate = subDays(now, 1)
        } else if (activeTab === 'monthly') {
            startDate = subMonths(now, 1)
        } else if (activeTab === 'yearly') {
            startDate = subYears(now, 1)
        }

        const dataMap = new Map()
        orders.forEach(order => {
            const orderDate = typeof order.date === "string" ? parseISO(order.date) : new Date(order.date)
            if (isWithinInterval(orderDate, { start: startDate, end: now })) {
                let label = ''
                if (activeTab === "today") label = format(orderDate, 'hh:mm a')
                else if (activeTab === 'monthly') label = format(orderDate, 'd')
                else if (activeTab === 'yearly') label = format(orderDate, 'MMM')

                if (dataMap.has(label)) {
                    const prev = dataMap.get(label)
                    dataMap.set(label, {
                        totalPrice: prev.totalPrice + order.totalPrice,
                        orderCount: prev.orderCount + 1
                    })
                } else {
                    dataMap.set(label, {
                        totalPrice: order.totalPrice,
                        orderCount: 1
                    })
                }
            }
        })

        const dataArray = Array.from(dataMap, ([name, values]) => ({
            name,
            totalPrice: values.totalPrice,
            orderCount: values.orderCount,
        }))

        if (activeTab === 'today') {
            dataArray.sort((a, b) => {
                const getMinutes = (t) => {
                    const date = parseISO(`2023-01-01T${t}`)
                    return date.getHours() * 60 + date.getMinutes()
                }
                return getMinutes(a.name) - getMinutes(b.name)
            })
        } else if (activeTab === 'monthly') {
            dataArray.sort((a, b) => parseInt(a.name) - parseInt(b.name))
        }else if(activeTab === 'yearly'){
            const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            dataArray.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name))
        }

        return dataArray
    }, [orders, activeTab])

    // const chartData = useMemo(() => {
    //     const now = new Date();
    //     let startDate;

    //     if (activeTab === 'today') {
    //         startDate = subDays(now, 1); // গত ২৪ ঘন্টা
    //     } else if (activeTab === 'monthly') {
    //         startDate = subMonths(now, 1); // গত ১ মাস
    //     } else if (activeTab === 'yearly') {
    //         startDate = subYears(now, 1); // গত ১ বছর
    //     }

    //     const dataMap = new Map();

    //     orders.forEach(order => {
    //         const orderDate = typeof order.date === 'string' ? parseISO(order.date) : new Date(order.date);
    //         if (isWithinInterval(orderDate, { start: startDate, end: now })) {
    //             let label = '';
    //             if (activeTab === 'today') {
    //                 label = format(orderDate, 'hh:mm a'); // eg. 03:30 PM
    //             } else if (activeTab === 'monthly') {
    //                 label = format(orderDate, 'd'); // eg. 2, 15, 30
    //             } else if (activeTab === 'yearly') {
    //                 label = format(orderDate, 'MMM'); // eg. Jan, Feb
    //             }

    //             if (dataMap.has(label)) {
    //                 const prev = dataMap.get(label);
    //                 dataMap.set(label, {
    //                     totalPrice: prev.totalPrice + order.totalPrice,
    //                     orderCount: prev.orderCount + 1,
    //                 });
    //             } else {
    //                 dataMap.set(label, {
    //                     totalPrice: order.totalPrice,
    //                     orderCount: 1,
    //                 });
    //             }
    //         }
    //     });

    //     const dataArr = Array.from(dataMap, ([name, values]) => ({
    //         name,
    //         totalPrice: values.totalPrice,
    //         orderCount: values.orderCount,
    //     }));

    //     // Sorting
    //     if (activeTab === 'today') {
    //         dataArr.sort((a, b) => {
    //             const getMinutes = (t) => {
    //                 const date = parseISO(`2023-01-01T${t}`);
    //                 return date.getHours() * 60 + date.getMinutes();
    //             };
    //             return getMinutes(a.name) - getMinutes(b.name);
    //         });
    //     } else if (activeTab === 'monthly') {
    //         dataArr.sort((a, b) => parseInt(a.name) - parseInt(b.name));
    //     } else if (activeTab === 'yearly') {
    //         const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //         dataArr.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));
    //     }

    //     return dataArr;
    // }, [orders, activeTab]);

    return (
        <div>
            <div className="bg-white rounded-xl shadow h-[450px] sm:h-[350px] md:h-[500px]">
                <h2 className='text-2xl font-bold text-green-800 p-4'>Salles Report</h2>
                <div className="flex gap-2 flex-wrap p-4">
                    {
                        ["today", "monthly", "yearly"].map((tab, i) => (
                            <button onClick={() => setActiveTab(tab)} key={i} className={`px-5 py-2 rounded-full font-semibold capitalize transition
                            ${activeTab === tab ? 'bg-green-600 text-white shadow-lg' :
                                    "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}>{tab}</button>
                        ))
                    }
                </div>

                {/* Chart */}
                <div className="h-60 md:h-80 mt-3">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="totalPrice"
                                stroke="#22c55e"
                                fill="#bbf7d0"
                                name="Total Price"
                                animationDuration={500}
                            />
                            <Line type="monotone" dataKey="orderCount" stroke="#FF5722" name="Total Orders" activeDot={{ r: 6 }} />

                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}




// Pie Chart Start here
const STATUS_COLORS = {
    Delivered: '#16A34A',
    Cancelled: '#EF4444',
    'In Progress': '#EAB308',
    Shipped: '#3B82F6',
}

export const StatusPieChart = ({ orders }) => {
    const chartData = [
        { name: 'Delivered', value: orders.filter(order => order.orderStatus === 'Delivered')?.length },
        { name: 'Cancelled', value: orders.filter(order => order.orderStatus === 'Cancelled')?.length },
        { name: 'In Progress', value: orders.filter(order => order.orderStatus === 'In Progress')?.length },
        { name: 'Shipped', value: orders.filter(order => order.orderStatus === 'Shipped')?.length }
    ].filter(item => item.value > 0)

    return (
        <div className="bg-white rounded-xl shadow p-4 h-[500px] sm:h-[350px] md:h-[500px]">
            <h2 className='text-2xl font-bold text-green-800 pb-2'>Order Status Overview</h2>
            <p className="text-gray-700 text-sm">Visual breakdown of all order statuses — easily track how many orders are Delivered, Shipped, In Progress, or Cancelled at a glance.</p>
            <div className="h-[300px] lg:mt-5">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={90}
                            fill="#8884d8"
                            label
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


// LineChart Start here
export const StatusLineChart = ({ users }) => {
    const months = Array.from({ length: 12 }, (_, i) => {
        const date = subMonths(new Date(), 11 - i)
        return {
            label: format(date, "MMM yyyy"),
            start: new Date(date.getFullYear(), date.getMonth(), 1),
            end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
        }
    })

    const userStatusData = months.map(month => {
        const active = users.filter(u => {
            const created = parseISO(u.createdAt)
            return (
                u.status === "active" && isWithinInterval(created, { start: month.start, end: month.end })
            )
        })?.length

        const inActive = users.filter(u => {
            const created = parseISO(u.createdAt)
            return u.status === "inactive" && isWithinInterval(created, { start: month.start, end: month.end })
        })?.length

        return { name: month.label, active, inActive }
    })


    return (
        <div className="bg-white rounded-xl shadow h-[500px] sm:h-[350px] md:h-[450px]">
            <h2 className='text-2xl font-bold text-green-800 pb-2'>Yearly Users Overview</h2>
            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={userStatusData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="active" stroke="#4CAF50" activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="inActive" stroke="#FF5722" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


// ComposedChart Start Here


const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];
export const StatusComposedChart = () => {
    return (
        <div className="bg-white rounded-xl shadow h-[500px] sm:h-[350px] md:h-[450px]">
            <h2 className='text-2xl font-bold text-green-800 p-4 pb-2'>Current Users</h2>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};