import React from "react";

export default function Hero() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">Big Billion Days</span>
          <h1>Up to 70% Off on Top Brands</h1>
          <p>Electronics, Fashion, Home & more — Free delivery on orders above ₹499</p>
          <button
            type="button"
            className="btn btn-light btn-lg hero-cta"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
