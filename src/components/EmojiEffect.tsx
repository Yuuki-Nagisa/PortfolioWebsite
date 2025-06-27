import { motion } from "motion/react";
import { useState } from "react";

const smileVariants = {
  talking: { backgroundColor: "crimson", scale: 1.1 },
  silent: { backgroundColor: "", scale: 1 },
};
const EmojiEffect = () => {
  const [isTap, setIsTap] = useState(false);
  const handleTap = () => {
    setIsTap(true);
    setTimeout(() => setIsTap(false), 5000);
  };
  return (
    <div
      className="flex flex-col md:flex-row 
            justify-center md:justify-center 
            items-center md:items-center xs:space-y-5 md:space-x-5"
    >
      <motion.div
        className={`relative w-32 h-32 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 border-2 border-yellow-600 rounded-full focus:outline-none`}
        onClick={handleTap}
        initial={{ scale: 1 }}
        exit={{ scale: 1 }}
        whileTap={{ scale: 1.3 }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
      >
        <motion.div
          className="absolute left-6 top-5 w-8 h-12 bg-black rounded-[100%]"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{
            delay: 3,
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <div className="absolute top-2 left-1 bg-white w-2 h-3 rounded-[100%]"></div>
        </motion.div>
        <motion.div
          className="absolute right-6 top-5 w-8 h-12 bg-black rounded-[100%]"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{
            delay: 3,
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <div className="absolute top-2 left-1 bg-white w-2 h-3 rounded-[100%]"></div>
        </motion.div>
        <div className="absolute bottom-5 w-full flex justify-center">
          <motion.div
            variants={smileVariants}
            className="w-10 h-5 border-5 transitio-bg duration-200 ease-in-out"
            style={{
              borderRadius: "0 0 100px 100px",
              borderTop: "transparent",
            }}
            initial="silent"
            animate={isTap ? "talking" : "silent"}
            transition={{ duration: 0.1 }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isTap ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        className={`py-2 px-4 bg-green-500/50 border-green-500 border-b-3 text-xl font-bold flex justify-center items-center mt-5`}
        style={{ borderRadius: "10% 10% 0 0" }}
      >
        Hello
      </motion.div>
    </div>
  );
};

export default EmojiEffect;
