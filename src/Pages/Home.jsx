import React from 'react';
import MyContainar from '../Layouts/MyContainar';
import RealTimeNotification from '../Components/RealTimeNotification/RealTimeNotification';
import SwipeHome from '../Components/SwiperHome/SwiperHome';
import Support from '../Components/Support/Support';
import RecentBills from '../Components/RecentBills/RecentBills';
import Hero from '../Components/Hero/Hero';




const Home = () => {
    return (
        <div>
             <Hero />
            <MyContainar>
            {/* <SwipeHome /> */}
           
            <RecentBills />
            <RealTimeNotification />
            <Support />
        </MyContainar>
        </div>
    );
};

export default Home;