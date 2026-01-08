import { useData } from "../services/DataContext";
import React from "react";

export default function DataQuality() {
  const { dataQuality } = useData();

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mt-6 w-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-white bg-blue-600 px-4 py-1 rounded">
          Data Quality Metrics
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-center mb-6">
        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Completeness</p>
          <p className="text-2xl font-bold text-green-600">
            {dataQuality.completeness}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Accuracy</p>
          <p className="text-2xl font-bold text-green-600">
            {dataQuality.accuracy}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Timeliness</p>
          <p className="text-lg font-semibold text-black">
            {dataQuality.timeliness}
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2 text-center">Data Issues</h4>

        {dataQuality.issues?.length > 0 ? (
          <div className="space-y-2">
            {dataQuality.issues.map((issue, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-md text-sm"
              >
                ⚠️ <span>{issue}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-600 text-sm text-center">
            ✅ No data issues found
          </p>
        )}
      </div>

      <div className="mt-5 text-gray-500 text-xs text-center">
        Last Refreshed:{" "}
        {new Date(dataQuality.lastRefreshed).toLocaleString()}
      </div>
    </div>
  );
}
