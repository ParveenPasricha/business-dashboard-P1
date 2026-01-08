import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { mockDataService } from "./mockDataService";


const DataContext = createContext(null);

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside DataProvider");
  return ctx;
};

export const DataProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    dateRange: { start: "2025-12-01", end: "2026-01-08" },
    region: "All",
    product: "All",
    department: "All",
  });

  const [kpis, setKpis] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [businessQuestions, setBusinessQuestions] = useState([]);
  const [dataQuality, setDataQuality] = useState({});

  useEffect(() => {
    const data = mockDataService.getFilteredData(filters);
    setFilteredData(data);
    setKpis(mockDataService.calculateKPIs(data));
    setBusinessQuestions(mockDataService.getBusinessQuestions());
    setDataQuality(mockDataService.checkDataQuality());
  }, [filters]);

  return (
    <DataContext.Provider
      value={{
        filters,
        setFilters,
        kpis,
        filteredData,
        businessQuestions,
        dataQuality,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
