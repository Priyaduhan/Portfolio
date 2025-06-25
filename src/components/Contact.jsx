import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen px-6 flex items-center">
      <div className="max-w-xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">
          Contact Me
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-600 py-2 rounded hover:bg-cyan-700"
          >
            Send
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/priya-duhan-9a7523240"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Priyaduhan"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a href="mailto:duhanpriya264@gmail.com">
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
