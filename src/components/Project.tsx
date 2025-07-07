"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import thumanailPortfolio from "../public/PortfiloWebsiteThumbnail.webp";
import AnalyticsManager from "../public/AnalyticsManager.webp";

type Project = {
  title: string;
  date: string;
  description: string[];
  techStack: string[];
  liveLink: string | false;
  githubLink: string | false;
  thumbnail: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    date: "Jun 2025",
    description: [
      "Designed and built a personal portfolio website to showcase skills, projects, and achievements.",
      "Implemented a responsive and professional design aimed at attracting potential employers or clients.",
    ],
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://yuuki-nagisa.github.io/PortfolioWebsite/",
    githubLink: "https://github.com/Yuuki-Nagisa/PortfolioWebsite",
    thumbnail: thumanailPortfolio,
  },
  {
    title: "Analytics Manager",
    date: "Jun 2025",
    description: [
      "Developed a real-time Click Event Analytics System using React.js (TypeScript) frontend and Spring Boot microservices.",
      "Implemented event streaming with Apache Kafka, transmitting user clicks (Enroll/Buy) from frontend to backend services.",
      "Built Kafka Producer and Consumer APIs in Spring Boot; consumer processes analytics and exposes metrics to Prometheus.",
      "Integrated Grafana dashboards for real-time visualization of user interaction data with live charts and usage insights.",
      "Deployed and managed Kafka, Prometheus, and Grafana on a remote Linux VM, gaining hands-on experience with distributed systems and observability.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Spring Boot",
      "Apache Kafka",
      "Prometheus",
      "Grafana",
      "Linux (VM)",
      "IntelliJ IDEA",
      "VS Code",
    ],
    liveLink: false,
    githubLink: false,
    thumbnail: AnalyticsManager,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{project.date}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-sm text-gray-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto text-blue-400 hover:text-blue-600 transition font-medium"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {selectedProject.date}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                {selectedProject.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {selectedProject.liveLink && (
                  <button
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                    onClick={() =>
                      (window.location.href = selectedProject.liveLink
                        ? selectedProject.liveLink
                        : "")
                    }
                  >
                    <FaExternalLinkAlt /> Live
                  </button>
                )}
                <button
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition"
                  onClick={() =>
                    (window.location.href = selectedProject.githubLink
                      ? selectedProject.githubLink
                      : "")
                  }
                >
                  <FaGithub /> Code
                </button>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-red-400 text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
