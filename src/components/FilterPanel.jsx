import { useState } from "react";
import { useData } from "../services/DataContext";
import React from "react";

export default function FilterPanel() {
  const { filters, setFilters } = useData();
  const [local, setLocal] = useState(filters);

  const apply = () => {
    setFilters(local);
  };

  const reset = () => {
    const defaults = {
      dateRange: { start: "2025-12-01", end: "2026-01-08" },
      region: "All",
      product: "All",
      department: "All",
    };
    setLocal(defaults);
    setFilters(defaults);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      <h3 className="text-lg font-semibold">Filters</h3>

      <div>
        <label className="text-sm text-gray-600">Start Date</label>
        <input
          type="date"
          value={local.dateRange.start}
          onChange={(e) =>
            setLocal({
              ...local,
              dateRange: { ...local.dateRange, start: e.target.value },
            })
          }
          className="w-full mt-1 border rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">End Date</label>
        <input
          type="date"
          value={local.dateRange.end}
          onChange={(e) =>
            setLocal({
              ...local,
              dateRange: { ...local.dateRange, end: e.target.value },
            })
          }
          className="w-full mt-1 border rounded px-2 py-1"
        />
      </div>

      {/* Region */}
      <div>
        <label className="text-sm text-gray-600">Region</label>
        <select
          value={local.region}
          onChange={(e) => setLocal({ ...local, region: e.target.value })}
          className="w-full mt-1 border rounded px-2 py-1"
        >
          {["All", "North", "South", "East", "West"].map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Product */}
      <div>
        <label className="text-sm text-gray-600">Product</label>
        <select
          value={local.product}
          onChange={(e) => setLocal({ ...local, product: e.target.value })}
          className="w-full mt-1 border rounded px-2 py-1"
        >
          {["All", "Product A", "Product B", "Product C", "Product D"].map(
            (p) => (
              <option key={p}>{p}</option>
            )
          )}
        </select>
      </div>

      {/* Department */}
      <div>
        <label className="text-sm text-gray-600">Department</label>
        <select
          value={local.department}
          onChange={(e) =>
            setLocal({ ...local, department: e.target.value })
          }
          className="w-full mt-1 border rounded px-2 py-1"
        >
          {["All", "Sales", "Marketing", "Operations", "Finance"].map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <button
          onClick={apply}
          className="flex-1 bg-indigo-600 text-white rounded py-2 text-sm hover:bg-indigo-700"
        >
          Apply
        </button>
        <button
          onClick={reset}
          className="flex-1 border rounded py-2 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
