import React from 'react';

const works = [
  {
    title: 'E-commercial Website',
    description: 'A modern, responsive commercial website for car garage.',
    type: 'e-commercial',
    link: 'https://github.com/phil-kagaba/car_garage_mern_stark'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with payment integration.',
    type: 'E-commerce',
    link: 'https://github.com/phil-kagaba/movie_website_project_with_bkjosh'
  },
  {
    title: 'Personal Blog',
    description: 'A customizable blog platform for online Agenda with laravel',
    type: 'Blog',
    link: 'https://github.com/phil-kagaba/onlineAgenda_with_laravel'
  },
  {
    title: 'wallpaper Website',
    description: 'A wallpaper web showcase my work and skills.',
    type: 'wallpaper',
    link: 'https://github.com/phil-kagaba/Xphilpaper-Design'
  },
  {
    title: 'Landing Page',
    description: 'High-converting landing pages for marketing campaigns.',
    type: 'Landing Page',
    link: 'https://github.com/phil-kagaba/landing-page'
  },
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