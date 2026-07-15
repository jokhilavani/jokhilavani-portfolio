import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-gray-50 dark:bg-black
        text-black dark:text-white
        px-6 md:px-20 py-24
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg">
            Get to know me better
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Aspiring Software Developer 💻
            </h3>

            <p className="text-gray-700 dark:text-gray-400 text-lg leading-8 mb-6">
              I'm <span className="text-cyan-400">Jokhilavani Thiyagarajan</span>,
              a B.Tech Information Technology student at
              <span className="text-purple-400">
                {" "}Nandha Engineering College
              </span>.
            </p>

            <p className="text-gray-700 dark:text-gray-400 text-lg leading-8 mb-6">
              I enjoy developing software applications using Java and continuously
              improving my problem-solving abilities and Data Structures knowledge.
            </p>

            <p className="text-gray-700 dark:text-gray-400 text-lg leading-8 mb-6">
              I am passionate about learning new technologies and building efficient
              solutions for real-world problems.
            </p>

            <p className="text-gray-700 dark:text-gray-400 text-lg leading-8">
              Become a skilled Software Developer and contribute to impactful
              products that solve real-world problems.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-8">

            {/* Education */}
            <div className="
              bg-black/5 dark:bg-white/5
              border border-black/10 dark:border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:border-cyan-400
              transition duration-300
            ">
              <FaGraduationCap className="text-5xl text-cyan-400 mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                Education
              </h4>

              <p className="text-gray-700 dark:text-gray-400">
                B.Tech Information Technology
              </p>

              <p className="text-gray-700 dark:text-gray-400">
                Nandha Engineering College
              </p>

              <p className="text-cyan-400 mt-3 font-semibold">
                CGPA: 8.01
              </p>
            </div>

            {/* Technologies */}
            <div className="
              bg-black/5 dark:bg-white/5
              border border-black/10 dark:border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:border-purple-400
              transition duration-300
            ">
              <FaCode className="text-5xl text-purple-400 mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                Technologies
              </h4>

              <p className="text-gray-700 dark:text-gray-400">
                Java • OOP • DSA • SQL • GitHub • Problem Solving
              </p>

              <p className="text-gray-700 dark:text-gray-400">
                MySQL • MongoDB
              </p>
            </div>

            {/* Career Goal */}
            <div className="
              bg-black/5 dark:bg-white/5
              border border-black/10 dark:border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:border-pink-400
              transition duration-300
            ">
              <FaLaptopCode className="text-5xl text-pink-400 mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                Career Goal
              </h4>

              <p className="text-gray-700 dark:text-gray-400">
                Become a skilled Software Developer and contribute to impactful
                products that solve real-world problems.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;