import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        bg-gray-50 dark:bg-black
        text-black dark:text-white
        py-24 px-6
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg">
            Let's connect and build something amazing together.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="
            max-w-3xl mx-auto
            bg-black/5 dark:bg-white/5
            backdrop-blur-xl
            border border-black/10 dark:border-white/10
            rounded-3xl
            p-10
            transition-colors duration-500
          "
        >
          <div className="space-y-8">

            <a
              href="mailto:jokhilavani.t@gmail.com"
              className="
                flex items-center gap-5
                text-gray-800 dark:text-gray-300
                hover:text-cyan-400
                transition
              "
            >
              <FaEnvelope size={30} />
              <span className="text-xl">
                jokhilavani.t@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/jokhilavani"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-5
                text-gray-800 dark:text-gray-300
                hover:text-cyan-400
                transition
              "
            >
              <FaGithub size={30} />
              <span className="text-xl">
                github.com/jokhilavani
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/jokhilavani-thiyagarajan-46993b294/"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-5
                text-gray-800 dark:text-gray-300
                hover:text-cyan-400
                transition
              "
            >
              <FaLinkedin size={30} />
              <span className="text-xl">
                linkedin.com/in/jokhilavani-thiyagarajan
              </span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;