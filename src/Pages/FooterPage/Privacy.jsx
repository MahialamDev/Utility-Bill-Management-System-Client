import React from "react";
import MyContainar from "../../Layouts/MyContainar";

const Privacy = () => {
  return (
    <MyContainar className="py-10 bg-base-300 text-base-content border border-primary/20 shadow-lg rounded-2xl">
      <div className="mx-auto ">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-base-400 mb-8">
          Last updated: January 2026
        </p>

        {/* Intro */}
        <p className="mb-6 leading-relaxed text-gray-500">
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our Utility Bill Management platform. Your
          privacy and data security are very important to us.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-500">
            <li>Personal information such as name, email address, and phone number</li>
            <li>Utility bill details (electricity, gas, water, internet, etc.)</li>
            <li>Usage data to improve system performance and user experience</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-500">
            <li>To manage and track your utility bills efficiently</li>
            <li>To send bill reminders and important notifications</li>
            <li>To improve our services and user interface</li>
            <li>To ensure account security and prevent fraud</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Data Security
          </h2>
          <p className="leading-relaxed text-gray-500">
            We implement industry-standard security measures to protect your
            data. However, no digital platform can guarantee 100% security.
            Please keep your login credentials confidential.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Data Sharing
          </h2>
          <p className="leading-relaxed text-gray-500">
            We do not sell or rent your personal data. Your information is only
            shared when required by law or to provide essential services related
            to utility bill processing.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-500">
            <li>Access and review your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Disable notifications or close your account</li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="border-t border-base-200 pt-4 mt-8 text-sm text-base-400">
          If you have any questions about this Privacy Policy, please contact
          our support team through the application.
        </div>

      </div>
    </MyContainar>
  );
};

export default Privacy;
