import React from 'react';
import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-yellow-400">Philbert Iradukunda</h2>
          <p className="text-sm">Full-stack Developer | React & Tailwindcss and many others</p>
          <p className="text-xs mt-1">© 2024 All rights reserved.</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:philbertiradukunda03@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://instagram.com/i__phil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaInstagram className="text-xl" />
            <span className="text-sm">Instagram</span>
          </a>
          <a
            href="https://github.com/phil-kagaba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm">GitHub</span>
          </a>
          <p className="text-sm mt-1">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
