import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import laptopBG from "../public/laptop.webp";
import HomePageBG from "../public/HomepageBG.webp";
import Resume from "./Resume";
import NameCenterDesign from "./NameCenterDesign";
import { IoMdMenu } from "react-icons/io";
import Project from "./Project";
import DropdownMenu from "./DropdownMenu";
import { useDropDownStatus } from "../DropdownState";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const MobileView = () => {
  const { isOpen, updateIsOpen } = useDropDownStatus();
  const refBG = useRef(null);
  const { scrollY } = useScroll({ target: refBG });
  const scaleBG = useTransform(scrollY, [0, 1000], [1, 5]);
  return (
    <div className="h-auto ">
      {" "}
      <IoMdMenu
        onClick={updateIsOpen}
        size={40}
        className="fixed right-0 text-gray-200 bg-[#FF5F1F] rounded-lg z-10 p-1 m-2"
      />
      <DropdownMenu />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            onClick={updateIsOpen}
            className={`fixed right-0 text-gray-200 bg-red-500 rounded-full z-10 p-2 m-1 `}
          >
            <CgClose onClick={updateIsOpen} size={40} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-screen relative overflow-hidden" id="home" ref={refBG}>
        <motion.div
          style={{
            scale: scaleBG,
          }}
          className="absolute w-full h-full inset-0"
        >
          <img
            alt="bg"
            src={HomePageBG}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 w-full h-full bg-black/20 flex flex-col justify-center">
          <NameCenterDesign />
        </div>
      </div>
      <About />
      <Experience />
      <Project />
      <img
        src={laptopBG}
        alt="bg"
        loading="lazy"
        className="fixed inset-0 h-[100vh] w-auto -z-10 object-cover "
      />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default MobileView;
