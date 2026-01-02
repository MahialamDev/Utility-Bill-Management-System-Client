import React from "react";

const FullScreenLoader = ({ text = "Pay fast, processing your bill" }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-30" />
          <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
        </div>

        {/* Main Text */}
        <p className="text-sm font-semibold text-gray-500 tracking-wide">
          {text}
          <span className="inline-flex ml-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </p>

        {/* Sub Text */}
        <span className="text-xs">
          Please don’t close this window
        </span>
      </div>
    </div>
  );
};

export default FullScreenLoader;
