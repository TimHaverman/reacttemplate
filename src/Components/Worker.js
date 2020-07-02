import React from 'react';

const Worker = ({children, worker}) => {
    return (
        <header className={worker}>
            {children}
        </header>
    ) 
};

export default Worker;

Worker.defaultProps = {
    worker: "defaultWorker"
};