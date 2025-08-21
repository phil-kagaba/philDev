import React from 'react';

const works = [
  {
    title: 'FilmZone',
    description: 'A modern, responsive commercial website for movie enthusiasts.',
    type: 'E-commercial',
    link: 'https://agasobanuyefilmzone.vercel.app/'
  }
];

export default function PortfolioSection() {
  return (
    <section className="mb-16" id="work">
      <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">Portfolio</h1>
      <p className="max-w-2xl mb-8 text-lg text-gray-300 leading-relaxed">
        Here are some of the websites I’ve built, including commercial, e-commerce, blogs, and more.<br />
        See more on my{' '}
        <a
          href="https://github.com/phil-kagaba"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-yellow-400 hover:text-yellow-300"
        >
          GitHub
        </a>
        .
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-yellow-400 transition"
          >
            <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
              {work.type}
            </span>
            <h2 className="text-2xl font-semibold mb-2 text-white">{work.title}</h2>
            <p className="text-gray-400 mb-4">{work.description}</p>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}