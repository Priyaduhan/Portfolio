import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/movwpwvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon! 🚀",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or email me directly at duhanpriya264@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen px-6 flex items-center bg-gray-900"
    >
      <div className="max-w-xl mx-auto w-full py-15">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let's Connect!
          </h2>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project or just say hello! 👋"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-4 px-6 rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-white flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </div>

          {status.message && (
            <div
              className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
                status.type === "success"
                  ? "bg-green-900/30 text-green-400 border border-green-500/30"
                  : "bg-red-900/30 text-red-400 border border-red-500/30"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle size={24} className="flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={24} className="flex-shrink-0 mt-0.5" />
              )}
              <p className="leading-relaxed">{status.message}</p>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://www.linkedin.com/in/priya-duhan-9a7523240"
            target="_blank"
            rel="noreferrer"
            className="group text-gray-400 hover:text-blue-400 transition-all duration-300 p-4 rounded-full hover:bg-blue-500/10 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/Priyaduhan"
            target="_blank"
            rel="noreferrer"
            className="group text-gray-400 hover:text-white transition-all duration-300 p-4 rounded-full hover:bg-gray-500/10 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:duhanpriya264@gmail.com"
            className="group text-gray-400 hover:text-purple-400 transition-all duration-300 p-4 rounded-full hover:bg-purple-500/10 transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Or email me directly at{" "}
            <a
              href="mailto:duhanpriya264@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              duhanpriya264@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
