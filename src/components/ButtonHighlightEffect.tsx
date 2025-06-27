import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

const hoverVairants = {
  hidden: { opacity: 0.5, width: 0 },
  visible: { opacity: 1, width: "100%" },
};
const ButtonHighlightEffect = ({ children }: { children: ReactNode }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className=" relative w-40 border-b-2 border-white"
    >
      <motion.div
        className="h-10 w-50 bg-teal-500/30"
        variants={hoverVairants}
        initial="hidden"
        animate={isHover ? "visible" : "hidden"}
        transition={{ duration: 0.4 }}
      />
      <span className="absolute inset-0 text-2xl text-center cursor-pointer">
        {children}
      </span>
    </motion.div>
  );
};

export default ButtonHighlightEffect;
