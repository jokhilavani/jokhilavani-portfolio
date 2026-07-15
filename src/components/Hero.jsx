import profile from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center justify-center
        px-6 md:px-12 pt-28
        bg-gray-50 dark:bg-black
        text-black dark:text-white
        overflow-hidden
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-500 text-xl mb-4 font-medium">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight pb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Jokhilavani
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thiyagarajan
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-2xl md:text-4xl font-bold text-black dark:text-white h-16">
            <Typewriter
              words={[
                "Software Developer",
                "Java Developer",
                "Aspiring Software Engineer",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-700 dark:text-gray-400 text-lg max-w-xl leading-relaxed">
            Passionate about building efficient software solutions
            using Java and continuously improving my problem-solving
            and development skills.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5 items-center">

            <a
              href="#projects"
              className="
                px-8 py-4 rounded-full
                bg-gradient-to-r from-cyan-500 to-purple-600
                text-white
                hover:scale-105
                transition-all duration-300
                shadow-lg shadow-purple-500/30
              "
            >
              View My Work 🚀
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                px-8 py-4 rounded-full
                border border-cyan-500
                text-black dark:text-white
                hover:bg-cyan-500/10
                transition duration-300
                flex items-center gap-3
              "
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/jokhilavani"
              target="_blank"
              rel="noreferrer"
              className="
                w-14 h-14 rounded-full
                border border-black/20 dark:border-white/20
                flex items-center justify-center
                hover:border-cyan-400
                hover:text-cyan-400
                transition duration-300
              "
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/jokhilavani-thiyagarajan-46993b294/"
              target="_blank"
              rel="noreferrer"
              className="
                w-14 h-14 rounded-full
                border border-black/20 dark:border-white/20
                flex items-center justify-center
                hover:border-cyan-400
                hover:text-cyan-400
                transition duration-300
              "
            >
              <FaLinkedin size={24} />
            </a>

          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Glow Effect */}
          <div className="absolute w-80 h-80 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>

          {/* Profile Image */}
          <div
            className="
              relative
              p-1
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-purple-500
              to-pink-500
              shadow-2xl
              shadow-purple-500/40
              animate-pulse
            "
          >
            <img
              src={profile}
              alt="Jokhilavani"
              className="
                w-80 h-80
                object-cover
                rounded-full
                border-4 border-white dark:border-black
              "
            />
          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400 text-4xl">
        ↓
      </div>
    </section>
  );
}

export default Hero;