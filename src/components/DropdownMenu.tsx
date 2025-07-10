import { motion } from "motion/react";
import { useDropDownStatus } from "../DropdownState";

const DropdownMenu = () => {
  const navButtons = ["Home", "About", "Experience", "Projects", "Contact"];
  const { isOpen, updateIsOpen } = useDropDownStatus();

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 3, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[20%] bg-[#FF5F1F] rounded-full flex items-center justify-center h-[100vw] w-[100vw] z-10"
        >
          <div className="space-y-1 py-2 px-4 flex flex-col items-center justify-around">
            {navButtons.map((navButton, index) => (
              <button
                key={index}
                onClick={() => {
                  document
                    .getElementById(navButton.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                  updateIsOpen();
                }}
                className="font-bold text-white py-2 px-4 hover:bg-white/20 border-white hover:scale-[200%]"
              >
                {navButton}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default DropdownMenu;
