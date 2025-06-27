import { motion } from "motion/react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="h-[100vh] bg-black flex  
            justify-center  
            items-center  overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        viewport={{ once: true }}
        className="w-[95%] md:w-[90%] h-[90%] md:h-[90%] bg-white p-10"
      >
        <span className="text-5xl border-teal-500 ">Experience</span>
        <div className="my-5 w-40 h-2 bg-teal-500"></div>
        <div className="flex justify-center items-center h-full text-2xl text-gray-500">
          This section is pending ...
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
