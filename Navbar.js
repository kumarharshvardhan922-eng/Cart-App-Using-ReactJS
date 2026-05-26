import React from "react";
import { categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Navbar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onCartOpen,
}) {
  const { cartCount } = useCart();

  return (
    <>
      <div className="navbar-top py-1">
        <div className="container d-flex justify-content-between small">
          <span>Free delivery on orders above ₹499</span>
          <span>Help | Sign In</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-main sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            apna<span className="brand-accent">cart</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <form
              className="d-flex flex-grow-1 mx-lg-3 my-2 my-lg-0"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control search-input"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button className="btn search-btn" type="submit" aria-label="Search">
                🔍
              </button>
            </form>

            <ul className="navbar-nav align-items-lg-center gap-lg-2">
              <li className="nav-item dropdown">
                <button
                  className="nav-link btn btn-link dropdown-toggle text-white"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        className={`dropdown-item ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => onCategoryChange(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-cart position-relative" onClick={onCartOpen}>
                  🛒 Cart
                  {cartCount > 0 && (
                    <span className="cart-badge">{cartCount > 99 ? "99+" : cartCount}</span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="category-bar">
        <div className="container d-flex gap-2 py-2 overflow-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-chip ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
