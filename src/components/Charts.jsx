import { useData } from "../services/DataContext";
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const { filteredData } = useData();

  const monthlyRevenue = filteredData.reduce((acc, d) => {
    const month = d.date.slice(0, 7); 
    acc[month] = (acc[month] || 0) + d.revenue;
    return acc;
  }, {});
  const lineData = Object.keys(monthlyRevenue).map((month) => ({
    month,
    revenue: monthlyRevenue[month],
  }));

  const productProfit = filteredData.reduce((acc, d) => {
  acc[d.product] = (acc[d.product] || 0) + (d.revenue - d.expenses);
  return acc;
}, {});

  const barData = Object.keys(productProfit).map((product) => ({
    product,
    profit: productProfit[product],
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
          <h3 className="font-semibold mb-4 text-gray-700">Revenue Trend (Monthly)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      {/* Bar Chart */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold mb-2">Profit by Product</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="profit" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
