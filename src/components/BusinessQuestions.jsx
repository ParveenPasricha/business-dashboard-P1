import { useData } from "../services/DataContext";
import React from "react";

export default function BusinessQuestions() {
  const { businessQuestions } = useData();

  return (
    <div className="border-l-4 border-indigo-500 p-4 rounded-xl bg-indigo-50">
      <h3 className="font-semibold mb-4">Business Questions & Actions</h3>
      <div className="space-y-3">
        {businessQuestions.map((q) => (
          <div key={q.id} className="border p-3 rounded-md hover:bg-gray-50 transition">
            <div className="font-medium mb-1">Q{q.id}: {q.question}</div>
            <div className="text-gray-700 mb-1">
              <strong>Answer:</strong> {q.answer}
            </div>
            <div className="text-green-700 font-semibold">
              <strong>Actionable Step:</strong> {q.actionable}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
