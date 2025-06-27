import React from 'react';

const PrivacyPolicy = () => {
  const date = new Date().getFullYear();

  return (
    <div className="relative bg-black text-white py-16 px-6 sm:px-10 lg:px-20">
      {/* Gradient Background Effects */}
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

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-sm font-semibold mb-8 text-center">
          Effective Date: {date}
        </p>

        <p className="mb-6 text-gray-300">
          At <strong>Get Me A Chai</strong>, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-white">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong>Personal Details:</strong> Including your name, email address, and contact information.</li>
          <li><strong>Payment Data:</strong> Collected and processed securely through our payment partner, Razorpay.</li>
          <li><strong>Usage Information:</strong> Including your interactions with our site, such as visits, clicks, and preferences.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-white">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>To process donations and purchases made on the platform.</li>
          <li>To provide a personalized user experience.</li>
          <li>To send updates, service notifications, or respond to your inquiries.</li>
          <li>To improve our platform based on usage analytics and user feedback.</li>
        </ul>

        <p className="mb-4 text-gray-300">
          <strong>Data Protection:</strong> We implement strong security measures, including encryption, to keep your data safe and prevent unauthorized access.
        </p>

        <p className="mb-4 text-gray-300">
          <strong>Your Rights:</strong> You can access, correct, or delete your data at any time. For any privacy-related requests, please email us at{' '}
          <a href="mailto:support@getmeachai.com" className="text-blue-400 underline">
            support@getmeachai.com
          </a>.
        </p>

        <p className="text-gray-300">
          By using our platform, you agree to this policy. For more details, please review our complete{' '}
          <a href="#" className="text-blue-400 underline">
            Privacy Policy
          </a>.
        </p>
      </div>

      {/* Bottom Gradient Background */}
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

export default PrivacyPolicy;
