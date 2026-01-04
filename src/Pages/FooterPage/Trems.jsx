import React from "react";
import MyContainar from "../../Layouts/MyContainar";

const Trems = () => {
  return (
    <MyContainar className="py-10 border border-primary/20 bg-base-300 shadow-lg rounded-2xl mt-5">
      <div className="mx-auto  text-base-content  ">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-sm text-base-400 mb-8">
          Last updated: January 2026
        </p>

        {/* Intro */}
        <p className="mb-6 leading-relaxed text-gray-500">
          These Terms & Conditions govern your access to and use of our Utility
          Bill Management platform. By using this service, you agree to comply
          with these terms.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed text-gray-500">
            By accessing or using our platform, you confirm that you have read,
            understood, and agreed to these Terms & Conditions. If you do not
            agree, please discontinue using the service.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-500">
            <li>Provide accurate and up-to-date personal information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Use the platform only for lawful utility bill management purposes</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Service Usage
          </h2>
          <p className="leading-relaxed text-gray-500">
            Our platform helps users track, manage, and receive reminders for
            utility bills. We do not guarantee uninterrupted or error-free
            service at all times.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Account Termination
          </h2>
          <p className="leading-relaxed text-gray-500">
            We reserve the right to suspend or terminate your account if you
            violate these Terms & Conditions or engage in misuse of the
            platform.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Limitation of Liability
          </h2>
          <p className="leading-relaxed text-gray-500">
            We are not responsible for any financial loss, missed payments, or
            penalties arising from incorrect data entry or service
            interruptions.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Changes to Terms
          </h2>
          <p className="leading-relaxed text-gray-500">
            We may update these Terms & Conditions at any time. Continued use of
            the platform after changes are made indicates acceptance of the
            revised terms.
          </p>
        </div>

        {/* Footer Note */}
        <div className="border-t border-base-200 pt-4 mt-8 text-sm text-base-400">
          If you have any questions regarding these Terms & Conditions, please
          contact our support team through the application.
        </div>

      </div>
    </MyContainar>
  );
};

export default Trems;
