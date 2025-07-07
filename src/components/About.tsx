import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import profilePhoto from "../public/profilePhoto.webp";
const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.div
      id="about"
      className="h-[800px]  bg-[#ead7c3] flex justify-center items-center "
    >
      <motion.div
        className="w-[80%] md:w-[60%] h-[95%] rounded-xl shadow-2xl bg-[#fbf6ef] flex flex-col items-center gap-5 md:gap-0"
        initial={{ scale: 1 }}
        whileHover={isMobile ? {} : { scale: 1.1, rotate: -5, zIndex: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="p-10 text-5xl  mt-2 md:mt-5 flex ">
          {"About".split("").map((ch, idx) => (
            <motion.div
              initial={{ scale: 1, color: "", fontWeight: "" }}
              whileHover={
                isMobile
                  ? {}
                  : { scale: 1.2, color: "green", fontWeight: "bold" }
              }
              key={idx}
            >
              {ch}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            className="ml-2 h-12 w-2 bg-gray-800"
          />
        </div>

        <div className="rounded-full w-40 h-40 overflow-hidden mb-5">
          <motion.img
            whileHover={isMobile ? {} : { scale: 1.2 }}
            alt=""
            src={profilePhoto}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="w-[95%] md:w-[60%] mb-2 text-center font-semibold">
          🚀 Second-Year CSE Student | Full Stack Developer I’m passionate
        </p>
        <p className="w-[95%] md:w-[60%] mb-4 text-center">
          I'm a second-year BTech student in Computer Science and Engineering at{" "}
          <a href="https://cit.ac.in/" className="font-semibold text-blue-800">
            Central Institute of Technology, Kokrajhar
          </a>{" "}
          (CITK'28), passionate about full-stack development and building
          real-world applications. My core strengths lie in backend development
          using Java, Spring Boot, and MySQL, along with modern frontend tools
          like React.js, Tailwind CSS, and Framer Motion. I enjoy solving
          problems, working on side projects, and continuously learning new
          technologies to grow as a developer.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
