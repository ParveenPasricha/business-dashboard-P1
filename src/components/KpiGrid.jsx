import { useData } from "../services/DataContext";
import React from "react";

export default function KpiGrid() {
  const { filteredData } = useData();

  const revenue = filteredData.reduce((sum, d) => sum + d.revenue, 0);
  const expenses = filteredData.reduce((sum, d) => sum + d.expenses, 0);
  const profit = revenue - expenses;
  const margin = revenue ? ((profit / revenue) * 100).toFixed(1) : 0;

  const customers = new Set(filteredData.map(d => d.customerId)).size;
  const orders = filteredData.reduce((s, d) => s + d.orders, 0);


  const target = revenue >= 800000;

   const Card = ({ title, value, icon, accent }) => (
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 flex flex-col justify-between h-full min-h-[110px]">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <span className={`text-xl ${accent}`}>{icon}</span>
        </div>
        <div>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 break-words">
            {value}
          </p>
        </div>
      </div>
    );

return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
      <Card title="Revenue" value={`₹${revenue.toLocaleString()}`} icon="💰" accent="text-indigo-600" />
      <Card title="Profit" value={`₹${profit.toLocaleString()}`} icon="📈" accent="text-green-600" />
      <Card title="Margin" value={`${margin}%`} icon="📊" accent="text-blue-600" />
      <Card title="Customers" value={customers} icon="👥" accent="text-purple-600" />
      <Card title="Orders" value={orders} icon="🛒" accent="text-orange-600" />
      <Card
        title="Target"
        value={target ? "On Track" : "Off Track"}
        icon={target ? "✅" : "⚠️"}
        accent={target ? "text-green-600" : "text-red-600"}
      />
    </div>
  );
}
