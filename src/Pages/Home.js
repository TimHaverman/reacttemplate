import React from 'react';
import Worker from '../Components/Worker.js';
import Head from '../Components/Head.js';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Worker>
                <Head>
                    <Link to='/public' className="btn-primary">Here</Link>
                </Head>
            </Worker>
            
        </>
    );
};
export default Home;