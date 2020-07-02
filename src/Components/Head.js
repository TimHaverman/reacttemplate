import React from "react";
const Head = ({ children, banner, subbanner }) => {
    return (
        <div className="Head">
            <h1>{banner}</h1>
            <p>{subbanner}</p>
            {children}
        </div>
    );
};

export default Head;