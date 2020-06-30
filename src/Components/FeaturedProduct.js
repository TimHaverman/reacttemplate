import React, { Component } from "react";
import Title from "./Title";
import { ProductContext } from "../context";
import Product from "./Product";
import Loading from "./Loading";
export default class featuredProducts extends Component {
  static contextType = ProductContext;

  render() {
    let { loading, featuredProducts: product } = this.context;

    product = product.map(product => {
      return <Product key={product.id} product={product} />;
    });
    return (
      <section className="featured-product">
        <Title title="featured product" />
        <div className="featured-product-center">
          {loading ? <Loading /> : product}
        </div>
      </section>
    );
  }
}