import React from 'react';

const MyContainar = ({children, className}) => {
    return (
        <div className={`container mx-auto px-5 py-10 ${className}`}>
            {children}
        </div>
    );
};

export default MyContainar;