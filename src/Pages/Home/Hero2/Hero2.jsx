import React from "react";
import banner1 from "../../../assets/banner-1.jpg";
import MyContainar from "../../../Layouts/MyContainar";

const Hero2 = () => {
  return (
    <section className="relative overflow-hidden bg-base-300 text-base-content">

      {/* Background glow (theme-based) */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-secondary/10 blur-[120px]" />

      <MyContainar>
        <div className="relative z-10 py-10 flex flex-col items-center text-center">

          {/* Badge */}
          <span className="px-4 py-1 rounded-full bg-base-100/10 border border-base-content/20 text-sm mb-6">
            ⚡ Smart Utility Platform
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            Manage Your Bills <br />
            <span className="text-primary">Smarter & Faster</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base-content/70 text-lg max-w-2xl">
            One powerful dashboard to pay, track and control all your utility
            bills securely without hassle.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary btn-lg rounded-xl">
              Start Free
            </button>

            <button className="btn btn-outline btn-lg rounded-xl">
              View Demo
            </button>
          </div>

          {/* Image Card */}
          <div className="mt-16 w-full flex justify-center">
            <div className="relative rounded-3xl border border-base-content/10 bg-base-100/5 backdrop-blur-xl shadow-2xl p-4">
              <img
                src={banner1}
                alt="Dashboard Preview"
                className="w-full max-w-[800px] rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>
      </MyContainar>
    </section>
  );
};

export default Hero2;
