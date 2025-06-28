// "use client"
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-black ">
      <section
        id="terms"
        className="relative block px-6 py-10 md:py-10 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="mx-[-10px] md:px-10 my-5">
          <h2 className="text-4xl font-extrabold font-sans pt-3 mb-10 text-white text-center">
            Terms & Conditions
          </h2>

          <p className="p-4 text-gray-200 text-md font-sans text-center">
            These terms and conditions (&quot;Terms&quot;) govern your use of the Get Me A Chai platform. By accessing or using our platform, you agree to comply with and be bound by these Terms.
          </p>

          <div className="p-4 text-gray-200 text-md font-sans max-w-5xl mx-auto">
            <h3 className="text-xl font-bold mt-6 mb-2">1. Acceptance of Terms</h3>
            <p>
              By creating an account or using our services, you agree to abide by these Terms and our Privacy Policy.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">2. Eligibility</h3>
            <p>
              You must be at least 13 years old to use our platform. If you are under 18, you must have parental or legal guardian consent.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">3. Use of the Platform</h3>
            <p>
              You are responsible for the content you post and the campaigns you create. You must not use the platform for illegal or unauthorized purposes.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">4. Payment & Contributions</h3>
            <p>
              Supporters may contribute to campaigns through our integrated payment system. Creators are responsible for the use of the funds received.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">5. Intellectual Property</h3>
            <p>
              All content, trademarks, and logos on the platform are the property of their respective owners. Unauthorized use is prohibited.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">6. Termination</h3>
            <p>
              We reserve the right to terminate or suspend accounts that violate these Terms or misuse the platform.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">7. Limitation of Liability</h3>
            <p>
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our platform.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">8. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the platform constitutes your acceptance of the updated Terms.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">9. Contact Us</h3>
            <p>
              If you have any questions or concerns, contact us at{' '}
              <a href="mailto:support@getmeachai.com" className="text-blue-400 underline">
                support@getmeachai.com
              </a>.
            </p>
          </div>

          <div className="absolute top-0 left-0 z-0 h-1/3 w-full" style={{
            backgroundImage:
              "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}></div>
          <div className="absolute top-0 right-0 z-0 h-1/3 w-full" style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}></div>

          <div className="bg-white h-1 opacity-10 my-20"></div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;

export const metadata = {
  title: "Terms & Conditions | Get Me A Chai",
};
