import React from "react";
import { withProductConsumer } from "../context";
import Loading from "./Loading";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

function ProductContainer({ context }) {
const { loading, sortedRooms, product } = context;
if (loading) {
    return <Loading />;
}
return (
    <>
    <ProductFilter rooms={product} />
    <ProductList rooms={sortedRooms} />
    </>
);
}

export default withProductConsumer(ProductContainer);