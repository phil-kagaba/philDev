export default function HeroSection() {
  return (
    <section className="text-left mb-16" id="about">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
        Hi, I'm <span className="text-yellow-400">i_philDev</span>
      </h1>
      <h2 className="text-3xl mb-6 font-semibold text-gray-400">
        Fullstack Web Developer
      </h2>
      <p className="max-w-2xl mb-8 text-lg text-gray-300 leading-relaxed">
        I specialize in frontend and backend development for building rich and scalable web applications. Let's bring your project to life!
      </p>
      <div className="flex gap-6">
        <a
          href="#work"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Work with us?
        </a>
      </div>
    </section>
  );
}
