import React from "react";
import Product from "./Product";
const ProductList = ({ product }) => {
  if (product.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no product matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {product.map(item => {
          return <Product key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;