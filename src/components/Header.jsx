import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-lg">
      <div>
        <h1 className="text-xl font-bold">Business Dashboard</h1>
        <p className="text-sm text-blue-100">Actionable insights for leadership</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          🔔
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
            P
          </div>
          <span>Parveen</span>
        </div>
      </div>
    </header>
  );
}
