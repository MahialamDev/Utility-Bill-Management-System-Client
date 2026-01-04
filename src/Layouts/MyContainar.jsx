import React from 'react';

const MyContainar = ({children, className}) => {
    return (
        <div className={`max-w-7xl mx-auto px-3 md:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default MyContainar;