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

const MobileView = () => {
  return (
    <div className="h-auto">
      <IoMdMenu size={40} className="fixed right-0 text-gray-200 z-10 m-2" />
      <div className="h-screen relative">
        <img
          alt="bg"
          src={HomePageBG}
          className="absolute w-full h-full inset-0 object-cover"
        />
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
