import { motion } from "motion/react";
import { useDropDownStatus } from "../DropdownState";

const DropdownMenu = () => {
  const navButtons = ["About", "Experience", "Projects", "Contact"];
  const { updateIsOpen } = useDropDownStatus();

  return (
    <motion.div className="fixed top-0 bg-[#FF5F1F] flex items-center justify-center h-screen w-full z-5">
      <div className="space-y-2 py-2 px-4 flex flex-col items-center justify-around">
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
  );
};

export default DropdownMenu;
