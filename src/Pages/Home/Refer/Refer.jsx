import React from "react";
import MyContainar from "../../../Layouts/MyContainar";
import box1 from "../../../assets/boxregister.webp";
import box2 from "../../../assets/earndollar.webp";
import box3 from "../../../assets/boxspeaker.webp";
import dots from "../../../assets/dots.png";
import earth from "../../../assets/referball.webp"

const Refer = () => {
  return (
    <div className="lg:flex gap-2 items-center justify-between py-8 my-8 ">
      {/* Left Side */}
          <div className="space-y-5 relative">
              <img src={earth} alt="" className="absolute -left-50 top-1/2  -translate-y-1/2 pointer-events-none" />
        <h1 className="font-bold text-2xl md:text-5xl ">Refer & Earn</h1>

        <p>
          Refer your friend up to $20. There are many variations of passages of
          Lorem Ipsum available, but the have suffered alteration in some form,
          by injected humour, or randomised words which don't look even slightly
          believable. If you are
        </p>
        <button className="btn btn-primary">Get Started Earn</button>
      </div>

      {/* Right side */}
          <div className="w-full min-h-80 grid md:grid-cols-2 place-items-center gap-5 md:min-w-2xl text-center relative mt-5 md:mt-0 ">
               <img className="hidden md:block absolute -top-8 -right-8" src={dots} alt="" />
               <img className="absolute -bottom-8 -right-8" src={dots} alt="" />
        {/* first one box */}
        <div className=" w-full">
          {/* box-1 */}
          <div className=" w-full shadow-md space-y-3 border bg-base-300/90 backdrop-blur-2xl px-9 py-6 rounded-xl border-gray-200">
            <img className="mx-auto w-12 h-12" src={box1} alt="" />
            <h1 className="text-xl font-bold text-primary">Refer your friends</h1>
            <p>Share your referral link with friends. Thry get &10.</p>
          </div>
        </div>

        {/* second two box */}
        <div className=" space-y-5 relative w-full">
          
          {/* box-2 */}
          <div className=" shadow-md z-10 w-full space-y-3 bg-base-300/30 backdrop-blur-2xl px-9 py-6 rounded-xl border border-gray-200 ">
            <img className="mx-auto w-12 h-12" src={box2} alt="" />
            <h1 className="text-xl font-bold text-primary">Register your friends</h1>
            <p>Your friends Register with using your referral link.</p>
          </div>
          {/* box-3 */}
          <div className=" shadow-md z-10 w-full space-y-3 bg-base-300/30 backdrop-blur-2xl px-9 py-6 rounded-xl border border-gray-200 ">
            <img className="mx-auto w-12 h-12" src={box3} alt="" />
            <h1 className="text-xl font-bold text-primary">Earn You</h1>
            <p>Share your referral link with friends. Thry get &10.</p>
                  </div>
                  
                 
        </div>
      </div>
    </div>
  );
};

export default Refer;
