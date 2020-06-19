import React from "react";
const Head = ({ stuff, title, subtitle }) => {
    return (
        <div className="Head">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {stuff}
        </div>
    );
};

export default Head;