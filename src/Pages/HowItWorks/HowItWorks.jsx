import React from "react";
import MyContainar from "../../Layouts/MyContainar";
import icon1 from "../../assets/chossetouch.png";
import icon2 from "../../assets/code.png";
import icon3 from "../../assets/find.png";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";

const HowItWorks = () => {
  return (
    <div className="mt-10 space-y-20">
      {/* Main Grid Section */}
      <MyContainar>
        <h1 className="text-center mb-2 font-bold text-2xl md:text-5xl">
          How It Works
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-5 text-gray-600 leading-relaxed">
          Paying your utility bills has never been easier. Follow these simple steps
          to securely manage and pay your bills online.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[{
            icon: icon1,
            number: "01",
            title: "Choose Your Utility",
            text: "Select the utility bill you want to pay—Electricity, Gas, Water, or Internet. Everything is in one place."
          },{
            icon: icon2,
            number: "02",
            title: "Provide Your Details",
            text: "Enter your account or meter number securely. All information is encrypted and safe."
          },{
            icon: icon3,
            number: "03",
            title: "Make Payment",
            text: "Pay your bills instantly and securely using multiple payment methods like bKash, Nagad, or card."
          }].map((step) => (
            <div
              key={step.number}
              className="p-5 rounded-2xl bg-base-300 shadow-md space-y-3 border border-primary/20 hover:scale-105 transition-transform"
            >
              <div className="flex justify-between items-center mb-2">
                <img src={step.icon} alt="" className="w-12 h-12 md:w-16 md:h-16" />
                <h1 className="md:text-5xl italic text-gray-500 font-bold">{step.number}</h1>
              </div>
              <h2 className="font-bold text-xl md:text-2xl text-base-400">
                {step.title}
              </h2>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </MyContainar>

      {/* Download App Section */}
      <div className="bg-primary/10 py-16">
        <MyContainar className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get the App</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Pay your bills anytime, anywhere with our mobile app. Fast, secure, and convenient.
          </p>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a
              href="https://play.google.com/store/
" target="blank"
              className="flex items-center gap-3 bg-base-300 text-base-400 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <img src={playstore} alt="Play Store" className="h-6 md:h-8" />
              <span className="font-semibold text-sm md:text-base">Google Play</span>
            </a>
            <a
              href="https://apps.apple.com/" target="blank"
              className="flex items-center gap-3 bg-base-300 text-base-400 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <img src={appstore} alt="App Store" className="h-6 md:h-8" />
              <span className="font-semibold text-sm md:text-base">App Store</span>
            </a>
          </div>
        </MyContainar>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <MyContainar className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make utility bill payments simple and stress-free. With a clean interface, secure payments, and instant confirmations, you can manage all your bills in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-5 bg-base-300 rounded-xl shadow-md">
              <h3 className="font-bold text-xl">Secure Payments</h3>
              <p className="text-gray-600 mt-2">All transactions are encrypted and safe.</p>
            </div>
            <div className="p-5 bg-base-300 rounded-xl shadow-md">
              <h3 className="font-bold text-xl">Instant Confirmation</h3>
              <p className="text-gray-600 mt-2">Receive receipts immediately after payment.</p>
            </div>
            <div className="p-5 bg-base-300 rounded-xl shadow-md">
              <h3 className="font-bold text-xl">Easy Tracking</h3>
              <p className="text-gray-600 mt-2">View past bills and payment history anytime.</p>
            </div>
          </div>
        </MyContainar>
      </div>
    </div>
  );
};

export default HowItWorks;
