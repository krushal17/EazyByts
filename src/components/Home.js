import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import stockImage from "../assets/stock-market.jpg"; // Add an image to assets folder

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src={stockImage} alt="Stock Market" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to the Stock Market Dashboard</h1>
          <p>Monitor market trends, manage your portfolio, and analyze trading performance.</p>
          <div className="buttons">
            <Link to="/dashboard" className="btn">Go to Dashboard</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
      </div>

      {/* Stock Ticker */}
      <div className="stock-ticker">
        <p>🔥 Live Market Updates: TSLA +2.5% | AAPL -1.3% | AMZN +0.9% | GOOG +1.2%</p>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>📊 Real-Time Data</h3>
            <p>Get instant updates on stock prices and trends.</p>
          </div>
          <div className="card">
            <h3>📈 Portfolio Management</h3>
            <p>Track your investments with an intuitive dashboard.</p>
          </div>
          <div className="card">
            <h3>📉 Trade Analysis</h3>
            <p>Analyze market performance and improve your strategy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
