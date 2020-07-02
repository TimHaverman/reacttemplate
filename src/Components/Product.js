import React from 'react'
import { Link } from "react-router-dom";
import defaultImg from '../Images/product-1.jpeg';
import PropTypes from "prop-types";
import { memo } from "react";

    const Product = memo(({ product }) => {
        const { name, slug, images, price} = product;
    return (
        <article className="product">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single product" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per </p>
                </div>
                <Link to={`/Products/${slug}`} className="btn-primary product-link">
                    Features
                </Link>
            </div>
            <p className="product-info">{name}</p>
        </article>
    );
});

Product.propTypes={
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
};
export default Product;