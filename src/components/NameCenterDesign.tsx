import { motion } from "motion/react";

const NameCenterDesign = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden ">
      <div className="pb-4 overflow-hidden">
        <motion.div
          className={`text-5xl md:text-7xl font-bold text-white font-serif flex`}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.2 }}
        >
          {"Dibyojit".split("").map((ch, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 1, color: "" }}
              whileHover={{ scale: 1.1, color: "red" }}
            >
              {ch}
            </motion.div>
          ))}
          <span className="text-transparent"> {"."}</span>
          {"Paul".split("").map((ch, idx) => (
            <motion.div
              initial={{ scale: 1, color: "" }}
              whileHover={{ scale: 1.1, color: "red" }}
              key={idx}
            >
              {ch}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className={`w-50 h-0.5 md:w-100 md:h-1 bg-white`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1.5, 1.5, 0] }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <div className="overflow-hidden pt-4">
        <motion.div
          className={`text-lg md:text-2xl font-semibold text-white uppercase`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.2 }}
        >
          java full stack developer
        </motion.div>
      </div>
    </div>
  );
};

export default NameCenterDesign;
