import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({children, to, className}) => {
    return (
        <NavLink to={to} className={({isActive})=> isActive ? `text-primary font-semibold ${className}` : `${className} `} >
            {children}
        </NavLink>
    );
};

export default MyLink;