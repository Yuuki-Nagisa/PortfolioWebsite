import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaServer,
  FaCogs,
  FaUserFriends,
} from "react-icons/fa";
import { SiFrontendmentor, SiXdadevelopers } from "react-icons/si";

const skills = [
  {
    category: "Languages",
    icon: <FaCode className="text-blue-400" />,
    items: [
      "Java",
      "Python",
      "C",
      "HTML",
      "CSS",
      "SQL",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "Frontend",
    icon: <SiFrontendmentor className="text-pink-400" />,
    items: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Zustand",
      "Redux Toolkit",
    ],
  },
  {
    category: "Backend",
    icon: <FaServer className="text-green-400" />,
    items: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Kafka", "Gradle"],
  },
  {
    category: "Database",
    icon: <FaDatabase className="text-yellow-400" />,
    items: ["MySQL"],
  },
  {
    category: "DevOps",
    icon: <SiXdadevelopers className="text-purple-400" />,
    items: ["Tomcat", "Linux (remote VM)", "Git", "Postman"],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-orange-400" />,
    items: [
      "WebSockets",
      "Selenium",
      "Prometheus",
      "Grafana",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Other",
    icon: <FaCogs className="text-cyan-400" />,
    items: [
      "Microservices",
      "PWA",
      "Low/High-Level Design",
      "OOPs",
      "DBMS",
      "API Integration",
    ],
  },
  {
    category: "Soft Skills",
    icon: <FaUserFriends className="text-teal-400" />,
    items: [
      "Problem solving",
      "Teamwork",
      "Communication",
      "Attention to detail",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience & Skills
        </motion.h2>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Web Development Intern
          </h3>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-medium text-white">
              TechnoMedia Software Solutions Pvt. Ltd.
            </span>{" "}
            · Remote
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Feb 2025 – Mar 2025 (2 months)
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Contributed to multiple web automation and backend projects using
              Python, Java, and Selenium.
            </li>
            <li>
              Used Tomcat to host PWAs and implemented WebSocket for real-time
              client communication.
            </li>
            <li>
              Used Postman to test and verify WebSocket connections for handling
              concurrent client requests.
            </li>
          </ul>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map(({ category, icon, items }) => (
            <div
              key={category}
              className="bg-gray-800 p-5 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h4 className="text-xl font-semibold text-white">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 hover:bg-blue-700 transition text-sm px-3 py-1 rounded-full font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
