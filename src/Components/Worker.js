import React from 'react';

const Worker = ({children,Worker}) => {
    return (
        <header className={Worker}>
            {children}
        </header>
    )
};

export default Worker;

Worker.defaultProps = {
    Worker:'defaultWorker'
};