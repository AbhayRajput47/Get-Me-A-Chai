import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-700 pb-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-semibold">Get Me A Chai</Link>
            <p className="text-sm text-gray-400">Fueling Creativity, One Cup at a Time ☕</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="hover:text-blue-400">About Us</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
            <Link href="/terms&Conditions" className="hover:text-blue-400">Terms & Conditions</Link>
            <Link href="/cancellation&refund" className="hover:text-blue-400">Cancellation & Refund</Link>
          </ul>

          <div className="flex gap-4">
            <a
              href="https://github.com/AbhayRajput47/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-rajput-247a81298/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Copyright &copy; {currentYear} Get Me A Chai. All rights reserved.</p>
          <p>Made with ❤️ by <span className="text-white font-semibold">Abhay Rajput</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
