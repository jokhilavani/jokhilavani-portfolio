import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Design and Implementation of Human Computer Interface",
    provider: "NPTEL",
    year: "2024",
  },
  {
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    year: "2024",
  },
  {
    title: "Cyber Security and Privacy",
    provider: "NPTEL",
    year: "2025",
  },
  {
    title: "AI in Human Resource Management",
    provider: "NPTEL",
    year: "2025",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg">
            Courses and certifications I have completed
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
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
                flex items-start gap-6
              "
            >
              <div className="text-cyan-400 text-4xl">
                <FaCertificate />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                  {cert.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-400">
                  {cert.provider}
                </p>

                <p className="text-purple-400 mt-2 font-medium">
                  {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;