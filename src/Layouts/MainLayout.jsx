import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
    <>
  <Navbar />
  
  <main className="flex-1 overflow-x-hidden relative z-10">
    <Outlet />
  </main>
  
  <Footer />

  {/* bg blur effect */}
  <div className="pointer-events-none fixed inset-0 -z-10">
    {/* Primary glow */}
    <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#2841C5]/40 blur-3xl animate-blob"></div>
    
    {/* Secondary glow */}
    <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#1F31A1]/30 blur-3xl animate-blob animation-delay-2000"></div>
    
    {/* Extra premium subtle circle */}
    <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-[#1F31A1]/20 blur-2xl animate-blob animation-delay-1000"></div>
  </div>
</>

    );
};

export default MainLayout;