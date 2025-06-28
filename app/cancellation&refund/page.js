import React from "react";

const CancellationRefundPolicies = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-black relative py-16 px-4 sm:px-6 lg:px-10">
      {/* Background gradient layers */}
      <div
        className="absolute top-0 left-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Cancellation & Refund Policies
        </h1>
        <p className="text-lg text-gray-400 italic mb-8">
          &quot;Clear terms, seamless experience.&quot;
        </p>
        <p className="text-sm text-gray-300 mb-6">
          <strong>Effective Date:</strong> {date}
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {/* Contributor Policy */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-left">
            For Contributors
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
            <li>
              Contributions made to campaigns are typically non-refundable.
            </li>
            <li>
              If you believe a campaign is fraudulent, contact us at{" "}
              <a
                href="mailto:support@getmeachai.com"
                className="text-blue-400 underline"
              >
                support@getmeachai.com
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Campaign Creator Policy */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-left">
            For Campaign Creators
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
            <li>
              To cancel your campaign, please contact our support team promptly.
            </li>
            <li>
              Funds that have already been transferred may not be refunded.
            </li>
          </ul>
        </div>

        {/* Exceptions */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-left">
            Exceptions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
            <li>
              If a campaign does not reach its funding goal, contributions may
              be refunded depending on the funding model used.
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-left">
            Need Help?
          </h2>
          <p className="text-gray-300 text-left">
            If you have questions or concerns, we’re here to help. Please reach
            out to us at{" "}
            <a
              href="mailto:support@getmeachai.com"
              className="text-blue-400 underline"
            >
              support@getmeachai.com
            </a>
            .
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
        }}
      ></div>
    </div>
  );
};

export default CancellationRefundPolicies;
