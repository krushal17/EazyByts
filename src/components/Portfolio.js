import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const addStock = () => {
    if (!symbol || !quantity || !buyPrice) {
      alert("Please enter valid stock details.");
      return;
    }

    const newStock = {
      id: Date.now(),
      symbol: symbol.toUpperCase(),
      quantity: parseInt(quantity),
      buyPrice: parseFloat(buyPrice),
      totalValue: parseInt(quantity) * parseFloat(buyPrice),
    };

    setPortfolio([...portfolio, newStock]);
    setSymbol("");
    setQuantity("");
    setBuyPrice("");
  };

  const removeStock = (id) => {
    setPortfolio(portfolio.filter((stock) => stock.id !== id));
  };

  return (
    <div className="portfolio">
      <h1>Portfolio Management</h1>

      <div className="portfolio-input">
        <input
          type="text"
          placeholder="Stock Symbol (e.g., AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Buy Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <button onClick={addStock}>Add to Portfolio</button>
      </div>

      {portfolio.length > 0 ? (
        <table className="portfolio-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Buy Price</th>
              <th>Total Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>${stock.buyPrice.toFixed(2)}</td>
                <td>${stock.totalValue.toFixed(2)}</td>
                <td>
                  <button className="remove-btn" onClick={() => removeStock(stock.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No stocks in portfolio. Add some!</p>
      )}
    </div>
  );
};

export default Portfolio;
