import { useState, useMemo } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const formatDateLabel = (date, type) => {
    const d = new Date(date)
    if (type === 'today') {
        return d.toLocaleTimeString([], { hour: "2-digit", hour12: true })
    } if (type === "monthly") {
        return d.getDate().toString()
    } if (type === "yearly") {
        return d.toLocaleString("default", { month: "short" })
    }
}

export const StatusAreaChart = ({ orders }) => {
    const [activeTab, setActiveTab] = useState("today")

    const chartData = useMemo(() => {
        const now = new Date();

        const dataToday = []
        const dataMonthly = []
        const dataYearly = []

        const addToData = (array, label, amount) => {
            const found = array.find((item) => item.name === label)
            if (found) {
                found.total += amount
            } else {
                array.push({ name: label, total: amount })
            }
        }

        orders.forEach(order => {
            const orderDate = new Date(order.date)
            if (orderDate.toDateString() === now.toDateString()) {
                const label = formatDateLabel(orderDate, "today")
                addToData(dataToday, label, order.totalPrice)
            } if (orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear()) {
                const label = formatDateLabel(orderDate, "monthly")
                addToData(dataMonthly, label, order.totalPrice)
            } if (orderDate.getFullYear() === now.getFullYear()) {
                const label = formatDateLabel(orderDate, "yearly")
                addToData(dataYearly, label, order.totalPrice)
            }
        })

        dataToday.sort((a, b) => new Date("1970/01/01 ", + a.name) - new Date("1970/01/01 " + b.name))
        dataMonthly.sort((a, b) => parseInt(a.name) - parseInt(b.name))
        const monthOrder = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ]
        dataYearly.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name))

        return {
            today: dataToday,
            monthly: dataMonthly,
            yearly: dataYearly,
        }
    }, [orders])
    return (
        <div>
            <div className="bg-white rounded-xl shadow h-[450px] sm:h-[350px] md:h-[400px]">
                <h2 className='text-xl font-bold text-green-800 p-4'>Salles Report</h2>
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
                <div className="h-60 lg:h-72 mt-3">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData[activeTab]}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#10B981"
                                fill="#D1FAE5"
                                animationDuration={500}
                            />
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
        <div className="bg-white rounded-xl shadow p-4 h-[400px] sm:h-[350px] md:h-[400px]">
            {/* <h2 className='text-xl font-bold text-green-800'>Order Status Overview</h2>
            <div className="h-[300px] ">
                <ResponsiveContainer width="100%" height="100%"> */}
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
