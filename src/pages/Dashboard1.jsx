import React, { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import KpiGrid from "../components/KpiGrid";
import Charts from "../components/Charts";
import BusinessQuestions from "../components/BusinessQuestions";
import DataQuality from "../components/DataQuality";
import Header from '../components/Header';

export default function Dashboard1() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 sm:p-6 space-y-6">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="space-y-6 lg:col-span-3">
            <FilterPanel />
            <div className="hidden lg:block"> 
                <DataQuality />
            </div>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <KpiGrid />
            <Charts />
            <BusinessQuestions />
            <div className="lg:hidden"> 
                <DataQuality />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}