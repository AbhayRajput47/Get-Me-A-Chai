import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-screen text-white bg-black px-6 py-16 sm:px-10 lg:px-20">
      {/* Top Gradient Glow Background */}
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

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
        <p className="text-gray-300 text-lg mb-10">
          We'd love to hear from you! Whether it's feedback, questions, or support – feel free to reach out.
        </p>

        <div className="text-left space-y-6 text-gray-300">
          <div>
            <p className="font-semibold">📧 Email:</p>
            <a href="mailto:support@getmeachai.com" className="text-blue-400 underline">
              support@getmeachai.com
            </a>
          </div>

          <div>
            <p className="font-semibold">📞 Phone:</p>
            <p>+1-800-321-4567</p>
          </div>

          <div>
            <p className="font-semibold">📍 Address:</p>
            <p>123 Creator Area, Innovation City, CA 90245</p>
          </div>

          <div>
            <p className="font-semibold">🔗 Follow us:</p>
            <div className="flex gap-4 mt-1">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Twitter</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Instagram</a>
            </div>
          </div>
        </div>

        <div className="h-px bg-white opacity-10 my-12 w-full"></div>
      </div>

      {/* Bottom Gradient Glow */}
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

export default Contact;
