import { motion } from "motion/react";
import resume from "../public/resume.pdf";
const Resume = () => {
  return (
    <div className="h-[30vh] backdrop-blur-xs md:backdrop-blur-sm bg-black/20 flex flex-col items-center justify-center">
      <span className="text-white text-3xl md:text-4xl font-light uppercase mb-4">
        Check out my résumé!
      </span>
      <a href={resume} target="_blank" download="Resume.pdf">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            width: "250px",
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.75,
            transition: { duration: 3, type: "spring", stiffness: 300 },
          }}
          className="w-50 h-10 border-2 text-center border-white text-white text-xl hover:bg-white/20 cursor-pointer"
        >
          Download Here !!
        </motion.div>
      </a>
    </div>
  );
};

export default Resume;
