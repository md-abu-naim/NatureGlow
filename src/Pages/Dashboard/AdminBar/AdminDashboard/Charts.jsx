import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LuPackagePlus } from "react-icons/lu";

const formatDateLabel = (date, type) => {
  const d = new Date(date);
  if (type === "today") {
    // For today: show hour like '08 AM', '13 PM'
    return d.toLocaleTimeString([], { hour: "2-digit", hour12: true });
  }
  if (type === "monthly") {
    // For monthly: show day number
    return d.getDate().toString();
  }
  if (type === "yearly") {
    // For yearly: show month short name
    return d.toLocaleString("default", { month: "short" });
  }
};

const AreaCharts = ({ orders }) => {
  const [activeTab, setActiveTab] = useState("today");

  // Prepare chart data based on active tab
  const chartData = useMemo(() => {
    const now = new Date();

    // Hold aggregated data for each tab type
    const dataToday = [];
    const dataMonthly = [];
    const dataYearly = [];

    // Helper function to add order total to data array by label
    const addToData = (array, label, amount) => {
      const found = array.find((item) => item.name === label);
      if (found) {
        found.total += amount;
      } else {
        array.push({ name: label, total: amount });
      }
    };

    orders.forEach((order) => {
      const orderDate = new Date(order.date); // your 'date' field

      // Today
      if (orderDate.toDateString() === now.toDateString()) {
        const label = formatDateLabel(orderDate, "today");
        addToData(dataToday, label, order.totalPrice);
      }

      // This Month
      if (
        orderDate.getMonth() === now.getMonth() &&
        orderDate.getFullYear() === now.getFullYear()
      ) {
        const label = formatDateLabel(orderDate, "monthly");
        addToData(dataMonthly, label, order.totalPrice);
      }

      // This Year
      if (orderDate.getFullYear() === now.getFullYear()) {
        const label = formatDateLabel(orderDate, "yearly");
        addToData(dataYearly, label, order.totalPrice);
      }
    });

    // Sort the data arrays by label for consistent XAxis order
    dataToday.sort((a, b) => new Date("1970/01/01 " + a.name) - new Date("1970/01/01 " + b.name));
    dataMonthly.sort((a, b) => parseInt(a.name) - parseInt(b.name));
    // For yearly, sort by month order
    const monthOrder = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    dataYearly.sort(
      (a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name)
    );

    return {
      today: dataToday,
      monthly: dataMonthly,
      yearly: dataYearly,
    };
  }, [orders]);

  // Total products count (sum of all products in all orders)
  const totalProducts = orders.reduce(
    (sum, order) => sum + order.products.length,
    0
  );

  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      {/* Total Products Card */}
      <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between border-l-4 border-green-500">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
          <p className="text-3xl font-bold text-green-600">{totalProducts}</p>
        </div>
        <LuPackagePlus className="text-5xl text-green-500" />
      </div>

      {/* Tabs */}
      <div className="flex gap-4">
        {["today", "monthly", "yearly"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold capitalize transition ${
              activeTab === tab
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-green-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData[activeTab]}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
  );
};

export default AreaCharts;
