import React from 'react';
import Worker from '../Components/Worker.js';
import Head from '../Components/Head.js';
import { Link } from "react-router-dom";
import FeaturedProducts from '../Components/FeaturedProduct.js';

const Home = () => {
    return (
        <>
            <Worker>
                <Head banner=" Products" subbanner="Start shopping below">
                    <Link to='/Products' className="btn-primary">Here</Link>
                </Head>
            </Worker>
            <FeaturedProducts />
        </>
    );
};
export default Home;