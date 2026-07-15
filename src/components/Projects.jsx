import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Online Book Shopping System",
    icon: "📚",
    tech: "HTML • CSS • JavaScript",
    description:
      "Developed a responsive online bookstore interface with book browsing, search functionality, wishlist, and shopping cart features. Database integration is planned for future enhancements.",
    github: null,
    demo: null,
  },

  {
    title: "Code Visualization Platform",
    icon: "💻",
    tech: "Java • DSA • Visualization",
    description:
      "Currently building an interactive platform to help beginners understand code execution visually using animations and step-by-step visualization.",
    github: null,
    demo: null,
  },

  {
    title: "More Projects Coming Soon",
    icon: "🚀",
    tech: "Learning • Building • Exploring",
    description:
      "Continuously learning new technologies and building projects to strengthen my software development and problem-solving skills.",
    github: null,
    demo: null,
  },
];

function Projects() {
  return (
    <section
  id="projects"
  className="
    min-h-screen
    bg-white dark:bg-black
    text-black dark:text-white
    py-24 px-6
    transition-colors duration-500
  "
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Some of the projects I have worked on
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-black/5 dark:bg-white/5
                backdrop-blur-xl
                border border-black/10 dark:border-white/10
                rounded-3xl
                p-8
                hover:scale-105
                hover:border-cyan-400
                transition-all duration-300
              "
            >
              <div className="text-6xl mb-6">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-7 mb-8">
                {project.description}
              </p>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-full
                      border border-cyan-400
                      hover:bg-cyan-400/10
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-full
                      border border-purple-400
                      hover:bg-purple-400/10
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;