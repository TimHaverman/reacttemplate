import React, { Component } from "react";
import defaultBcg from "../Images/product-1.jpeg";
import Worker from "../Components/Worker";
import Head from "../Components/Head";
import { Link } from "react-router-dom";
import {ProductContext} from "../context";

import StyledWorker from "../Components/StyledWorker";

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  
  static contextType = ProductContext;
 
  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);

    if (!product) {
      return (
        <div className="error">
          <h3> no such product could be found...</h3>
          <Link to="/product" className="btn-primary">
            back to product
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,         
      images
    } = product;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledWorker img={images[0] || this.state.defaultBcg}>
          <Head title={`${name} product`}>
            <Link to="/product" className="btn-primary">
              back to product
            </Link>
          </Head>
        </StyledWorker>
        <section className="single-product">
          <div className="single-product-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-product-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} ammo` : `${capacity} ammo`}
              </h6>
            </article>
          </div>
        </section>
        <section className="product-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}