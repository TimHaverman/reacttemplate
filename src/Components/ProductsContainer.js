import React from "react";
import { withProductConsumer } from "../context";
import Loading from "./Loading";
import ProductFilter from "./ProductFilter";
import ProductsList from "./ProductsList";

function ProductContainer({ context }) {
const { loading, sortedProducts, products } = context;
if (loading) {
    return <Loading />;
}
return (
    <>
    <ProductFilter products={products} />
    <ProductsList products={sortedProducts} />
    </>
);
}

export default withProductConsumer(ProductContainer);