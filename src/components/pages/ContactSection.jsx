import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="mb-16" id="contact">
      <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">Contact Me</h1>
      <p className="max-w-2xl mb-8 text-lg text-gray-300 leading-relaxed">
        Feel free to reach out for collaborations, project inquiries, or just to say hi!
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="mailto:philbertiradukunda03@gmail.com"
          className="flex items-center gap-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 text-gray-200 px-6 py-4 rounded-lg font-semibold shadow transition"
        >
          <FaEnvelope className="text-yellow-400 text-2xl" />
          philbertiradukunda03@gmail.com
        </a>
        <a
          href="https://instagram.com/i__phil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 text-gray-200 px-6 py-4 rounded-lg font-semibold shadow transition"
        >
          <FaInstagram className="text-yellow-400 text-2xl" />
          @i__phil
        </a>
        <a
          href="https://github.com/phil-kagaba"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 text-gray-200 px-6 py-4 rounded-lg font-semibold shadow transition"
        >
          <FaGithub className="text-yellow-400 text-2xl" />
          github.com/phil-kagaba
        </a>
      </div>
    </section>
  );
}