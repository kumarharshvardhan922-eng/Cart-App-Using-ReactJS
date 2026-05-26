import React from "react";
import Product from "./Product";

export default function ProductList({ products, searchQuery, selectedCategory }) {
  const filtered = products.filter((product) => {
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="products-section py-4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
          <h2 className="section-title mb-0">Deals of the Day</h2>
          <p className="text-muted mb-0">
            {filtered.length} {filtered.length === 1 ? "product" : "products"} found
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-5">No products match your search.</p>
            <p className="text-muted">Try a different keyword or category.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
