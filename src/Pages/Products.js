import React from "react";
import Worker from "../Components/Worker";
import Head from "../Components/Banner";
import { Link } from "react-router-dom";
import ProductsContainer from "../Components/ProductsContainer";
const Products = () => {
  return (
    <>
      <Worker worker="productsWorker">
        <Head title="our products">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Head>
      </Worker>
      <ProductsContainer />
    </>
  );
};

export default Products;