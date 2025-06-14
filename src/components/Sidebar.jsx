import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#about" className="hover:text-yellow-400 flex flex-col md:flex-row items-center gap-1 md:gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
        </svg>
        <span>About</span>
      </a>
      <a href="#skills" className="hover:text-yellow-400 flex flex-col md:flex-row items-center gap-1 md:gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>My Skills</span>
      </a>
      <a href="#work" className="hover:text-yellow-400 flex flex-col md:flex-row items-center gap-1 md:gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v3a2 2 0 002 2m10 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6" />
        </svg>
        <span>Work</span>
      </a>
      <a href="#contact" className="hover:text-yellow-400 flex flex-col md:flex-row items-center gap-1 md:gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" />
        </svg>
        <span>Contact</span>
      </a>
      <a href="#Request" className="hover:text-yellow-400 flex flex-col md:flex-row items-center gap-1 md:gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M12 4h9m-9 0a9 9 0 00-9 9v7a2 2 0 002 2h7m0-18v16" />
        </svg>
        <span>Request</span>
      </a>
    </>
  );

  return (
    <>

      <aside className="hidden md:flex w-64 min-h-screen bg-gray-900 text-white p-6 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/pro.jpg" alt="Me" className="w-10 h-10 rounded-full shadow-lg" />
            <h2 className="text-2xl font-bold">i_philDev</h2>
          </div>
          <nav className="flex flex-col gap-4">{navLinks}</nav>
        </div>
        <div>
          <button className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-gray-900 px-5 py-2 rounded-lg shadow-lg font-bold w-full transition transform hover:scale-105 hover:from-yellow-400 hover:to-yellow-300 hover:shadow-xl border-2 border-yellow-400">
            <span className="flex items-center justify-center gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0h4m-4 0H8" />
              </svg>
              <a href="#contact"> Hire Me</a>
            </span>
          </button>
        </div>
      </aside>

      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 flex justify-around items-center h-16">
        {navLinks}
      </nav>
    </>
  );
}