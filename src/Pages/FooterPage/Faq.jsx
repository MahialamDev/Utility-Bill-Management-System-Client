import React from "react";
import MyContainar from "../../Layouts/MyContainar";

const Faq = () => {
  return (
    <MyContainar className="py-10">
      <div className="mx-auto bg-base-300 text-base-content shadow-lg rounded-2xl p-6 md:p-10">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-base-400 mb-8">
          Quick answers to common questions about managing your utility bills.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">

          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do I add a new utility bill?
            </div>
            <div className="collapse-content text-gray-500">
              <p>
                Go to your dashboard, click on “Add Bill”, select the utility
                type, enter the bill details, and save it.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Can I set reminders for bill payments?
            </div>
            <div className="collapse-content text-gray-500">
              <p>
                Yes. You can enable reminders from the bill details page to
                receive notifications before the due date.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Is my personal and billing data secure?
            </div>
            <div className="collapse-content text-gray-500">
              <p>
                Absolutely. We use industry-standard security practices to
                protect your personal and billing information.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Can I edit or delete an existing bill?
            </div>
            <div className="collapse-content text-gray-500">
              <p>
                Yes. You can edit or delete any bill from the dashboard at any
                time.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              What happens if I miss a payment?
            </div>
            <div className="collapse-content text-gray-500">
              <p>
                Our platform provides reminders, but payment responsibility
                remains with the user. Any late fees depend on the utility
                provider.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Help */}
        <div className="mt-10 border-t border-base-200 pt-6">
          <p className="text-gray-500 mb-3">
            Still have questions?
          </p>
          <button className="btn btn-primary">
            Contact Support
          </button>
        </div>

      </div>
    </MyContainar>
  );
};

export default Faq;
