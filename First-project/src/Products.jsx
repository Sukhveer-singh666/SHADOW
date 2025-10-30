import React from "react";
import "./Products.css";

const Products = () => {
  const products = [
    { name: "Smart Device", price: "$99" },
    { name: "AI Toolkit", price: "$149" },
    { name: "Cloud Subscription", price: "$199" },
  ];

  return (
    <section className="products" id="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
