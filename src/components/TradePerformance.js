import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./TradePerformance.css";

const TradePerformance = () => {
  const [trades, setTrades] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const addTrade = () => {
    if (symbol && price && date) {
      setTrades([...trades, { symbol, price: parseFloat(price), date }]);
      setSymbol("");
      setPrice("");
      setDate("");
    }
  };

  return (
    <div className="trade-performance-container">
      <h1>Trade Performance Analysis</h1>

      <div className="trade-form">
        <input type="text" placeholder="Stock Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button onClick={addTrade}>Add Trade</button>
      </div>

      <div className="trade-list">
        {trades.map((trade, index) => (
          <div key={index} className="trade-item">
            <span>{trade.date} - {trade.symbol} - ${trade.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {trades.length > 0 && (
        <div className="chart-container">
          <h2>Trade Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trades} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TradePerformance;
