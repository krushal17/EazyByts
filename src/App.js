import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import StockDashboard from "./components/StockDashboard";
import Portfolio from "./components/Portfolio";
import TradePerformance from "./components/TradePerformance";
import Navbar from "./components/Navbar"; // Navigation bar

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<StockDashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/performance" element={<TradePerformance />} />
      </Routes>
    </Router>
  );
}

export default App;
