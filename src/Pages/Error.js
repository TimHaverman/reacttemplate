import React from 'react';
import Worker from '../Components/Worker.js';
import Head from '../Components/Head';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <Worker>
            <Head title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                Return Home
                </Link>
            </Head>
        </Worker>        
    )
}
export default Error;