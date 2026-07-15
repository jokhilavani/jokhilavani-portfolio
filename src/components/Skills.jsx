import {
  FaJava,
  FaDatabase,
  FaGithub,
  FaCode,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaJava size={50} />,
    title: "Java",
    color: "text-orange-400",
  },
  {
    icon: <FaCode size={50} />,
    title: "OOP",
    color: "text-cyan-400",
  },
  {
    icon: <FaCode size={50} />,
    title: "DSA",
    color: "text-purple-400",
  },
  {
    icon: <FaDatabase size={50} />,
    title: "SQL",
    color: "text-green-400",
  },
  {
    icon: <FaDatabase size={50} />,
    title: "MySQL",
    color: "text-blue-400",
  },
  {
    icon: <FaGithub size={50} />,
    title: "GitHub",
    color: "text-pink-400",
  },
  {
    icon: <FaCode size={50} />,
    title: "Problem Solving",
    color: "text-yellow-400",
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg">
            Technologies and concepts I work with
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-black/5 dark:bg-white/5
                border border-black/10 dark:border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:scale-105
                hover:border-cyan-400
                transition-all duration-300
                text-center
              "
            >
              <div className={`${skill.color} flex justify-center mb-6`}>
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;