import RecentBills from "../../Components/RecentBills/RecentBills";
import MyContainar from "../../Layouts/MyContainar";
import Faq from "../FooterPage/Faq";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero2/Hero2";
import RealTimeNotification from "./RealTimeNotification/RealTimeNotification";
import Refer from "./Refer/Refer";
import Support from "./Support/Support";




const Home = () => {
    return (
        <div>
            {/* <Hero /> */}
            <Hero2 />
            <MyContainar>
            {/* <SwipeHome /> */}
           
                <RecentBills />
            <Refer></Refer>
            <RealTimeNotification />
            <Support />
            </MyContainar>
            <div id="faq-section">

            <Faq />
            </div>
        </div>
    );
};

export default Home;