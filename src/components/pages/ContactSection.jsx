import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function ContactSection() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSent, setIsSent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsSent(null);

    emailjs.sendForm(
      'service_0hlybnn',     // Replace this with your actual EmailJS Service ID
      'template_l2in6u5',    // Replace this with your actual Template ID
      formRef.current,
      '-_A48npqsxCY7DtKZ'      // Replace this with your EmailJS Public Key
    ).then(
      () => {
        setIsSent(true);
        setStatusMessage("✅ Message sent successfully! I'll get back to you soon.");
        formRef.current.reset();
      },
      (error) => {
        setIsSent(false);
        setStatusMessage('❌ Oops! Something went wrong. Please try again later.');
        console.error(error);
      }
    );
  };

  return (
    <section className="mb-16" id="contact">
      <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">Contact Me</h1>
      <p className="max-w-2xl mb-8 text-lg text-gray-300 leading-relaxed">
        Feel free to reach out for collaborations, project inquiries, or just to say hi!
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-xl mb-4">
        <input
          type="text"
          name="name" // for {{name}} in your template
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          required
        />
        <input
          type="email"
          name="email" // for {{email}} in your template
          placeholder="Your Email"
          className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          required
        />
        <input
          type="text"
          name="title" // for {{title}} in your subject
          placeholder="Subject"
          className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          required
        />
        <textarea
          name="message" // for {{message}} in your email body
          rows="5"
          placeholder="Your Message"
          className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </form>

      {statusMessage && (
        <div
          className={`transition duration-300 ease-in-out text-lg font-semibold mb-8 ${
            isSent ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {statusMessage}
        </div>
      )}
    </section>
  );
}
