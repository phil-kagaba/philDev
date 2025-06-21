import React from 'react';
import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} philDeBaddest. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400 transition">Terms of Use</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
        

        <div className="flex flex-col sm:flex-row gap-6">
            <a
            href="mailto:philbertiradukunda03@gmail.com"
            >
            <FaEnvelope className="text-yellow-400 text-2xl" />
            philbertiradukunda03@gmail.com
            </a>
            <a
            href="https://instagram.com/i__phil"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaInstagram className="text-yellow-400 text-2xl" />
            @i__phil
            </a>
            <a
            href="https://github.com/phil-kagaba"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub className="text-yellow-400 text-2xl" />
            github.com/phil-kagaba
            </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
