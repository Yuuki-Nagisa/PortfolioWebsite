import { motion, useScroll, useTransform } from "motion/react";

const NavBar = () => {
  const navButtons = ["About", "Experience", "Projects", "Contact"];
  const { scrollYProgress } = useScroll();
  const navColor = useTransform(
    scrollYProgress,
    [0.05, 0.1],
    ["rgba(0, 0, 0, 0)", "#000000"]
  );
  return (
    <div className="fixed inset-0 h-0 z-10">
      <motion.div
        className="flex justify-between items-center p-2 "
        style={{ backgroundColor: navColor }}
      >
        <div className="ml-[5%] flex items-center justify-center">
          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-3xl font-semibold text-white "
          >
            Dibyojit Paul
          </button>
        </div>
        <div className="mr-[5%] flex space-x-5 text-center">
          {navButtons.map((navButton, index) => (
            <button
              key={index}
              onClick={() =>
                document
                  .getElementById(navButton.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-bold text-white py-2 px-4 hover:bg-white/20 border-white"
            >
              {navButton}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
