import React from 'react';
import loadingGif from '../Images/gif/loading-gear.gif';

const Loading = () => {
    return (
        <div className="loading">
            <h4>products data loading</h4>
            <img src={loadingGif} alt="0"/>
        </div>
    );
};

export default Loading;