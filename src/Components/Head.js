import React from "react";
const Head = ({ stuff, banner, subtitle }) => {
    return (
        <div className="Head">
            <h1>{banner}</h1>
            <p>{subtitle}</p>
            {stuff}
        </div>
    );
};

export default Head;