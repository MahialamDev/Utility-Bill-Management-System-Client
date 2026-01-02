import React from 'react';
import mainLogoimg from "../../assets/myLogoW.png";
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-2">
               <div className="h-6 md:h-8">
                 <img className="h-full" src={mainLogoimg} alt="logo" />
               </div>
               <h1 className="text-xl font-bold text-primary hidden md:flex">
                 Pay<span className="text-base-content/80">Bills</span>
               </h1>
             </Link>
    );
};

export default Logo;