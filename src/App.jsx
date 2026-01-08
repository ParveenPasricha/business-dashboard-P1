import React from "react";
import Dashboard from './pages/Dashboard1'
import { DataProvider } from "./services/DataContext";
import './App.css';

function App() {
  return (
    <DataProvider>
      <Dashboard/>
    </DataProvider>
  );
}

export default App;
