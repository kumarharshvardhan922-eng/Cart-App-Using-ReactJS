import React from "react";
import { useCart } from "../context/CartContext";

function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Cart({ show, onClose }) {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    alert(`Order placed! Total: ${formatPrice(cartTotal)}. Thank you for shopping!`);
    clearCart();
    onClose();
  };

  return (
    <>
      {show && <div className="cart-backdrop" onClick={onClose} aria-hidden="true" />}
      <div className={`cart-drawer ${show ? "cart-drawer-open" : ""}`} aria-hidden={!show}>
        <div className="cart-header">
          <h5 className="mb-0">🛒 Shopping Cart ({cartItems.length})</h5>
          <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close cart" />
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty text-center py-5">
              <p className="text-muted mb-3">Your cart is empty</p>
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details flex-grow-1">
                  <h6 className="cart-item-title">{item.name}</h6>
                  <p className="cart-item-price mb-2">{formatPrice(item.price)}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-danger ms-auto p-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>
            <button type="button" className="btn btn-warning w-100 fw-semibold mb-2" onClick={handleCheckout}>
              Proceed to Buy
            </button>
            <button type="button" className="btn btn-outline-secondary w-100" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
