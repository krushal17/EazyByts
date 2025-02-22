import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./StockDashboard.css";

const StockDashboard = () => {
  const [stockData, setStockData] = useState([]);
  const [symbol, setSymbol] = useState("AAPL");
  const [loading, setLoading] = useState(false);

  const fetchStockData = async () => {
    setLoading(true);
    const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY"; // Replace with your API key
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
    
    try {
      const response = await axios.get(url);
      const timeSeries = response.data["Time Series (Daily)"];
      if (timeSeries) {
        const formattedData = Object.keys(timeSeries).map((date) => ({
          date,
          close: parseFloat(timeSeries[date]["4. close"]),
        })).reverse();
        setStockData(formattedData);
      } else {
        setStockData([]);
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <div className="stock-dashboard">
      <h1>Stock Market Dashboard</h1>

      <div className="stock-search">
        <input
          type="text"
          placeholder="Enter Stock Symbol (e.g., AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        />
        <button onClick={fetchStockData}>Search</button>
      </div>

      {loading ? (
        <p>Loading stock data...</p>
      ) : stockData.length > 0 ? (
        <div className="chart-container">
          <h2>{symbol} Stock Price Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="close" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p>No stock data available. Try another symbol.</p>
      )}
    </div>
  );
};

export default StockDashboard;
