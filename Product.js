import React from "react";
import { useCart } from "../context/CartContext";

function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <span className="product-rating" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(fullStars)}
      {hasHalf && "½"}
      <span className="rating-muted">{"★".repeat(5 - fullStars - (hasHalf ? 1 : 0))}</span>
      <span className="rating-value ms-1">({rating})</span>
    </span>
  );
}

export default function Product({ product }) {
  const { addToCart, cartItems } = useCart();
  const inCart = cartItems.find((item) => item.id === product.id);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card product-card h-100">
        <div className="product-image-wrap">
          {discount > 0 && <span className="product-discount-badge">{discount}% off</span>}
          <img src={product.image} className="card-img-top product-image" alt={product.name} loading="lazy" />
        </div>
        <div className="card-body d-flex flex-column">
          <span className="product-category">{product.category}</span>
          <h5 className="card-title product-title">{product.name}</h5>
          <p className="card-text product-desc text-muted small">{product.description}</p>
          <StarRating rating={product.rating} />
          <p className="product-reviews small text-muted mb-2">{product.reviews.toLocaleString("en-IN")} ratings</p>
          <div className="product-price-block mt-auto">
            <span className="product-price">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="product-original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button
            type="button"
            className={`btn w-100 mt-2 ${inCart ? "btn-success" : "btn-warning"}`}
            onClick={() => addToCart(product)}
          >
            {inCart ? `In Cart (${inCart.quantity})` : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
