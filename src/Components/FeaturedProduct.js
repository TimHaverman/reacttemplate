import React, { Component } from "react";
import Banner from "./Banner";
import { ProductContext } from "../context";
import Product from "./Product";
import Loading from "./Loading";
export default class FeaturedProducts extends Component {
  static contextType = ProductContext;

  render() {
    let { loading, featuredProducts: products } = this.context;

    products = products.map(product => {
      return <Product key={product.id} product={product} />;
    });
    return (
      <section className="featured-products">
        <Banner banner="featured products" />
        <div className="featured-product-center">
          {loading ? <Loading /> : products}
        </div>
      </section>
    );
  }
}