import EmojiEffect from "./EmojiEffect";
import NameCenterDesign from "./NameCenterDesign";
import NavBar from "./NavBar";
import About from "./About";
import laptopBG from "../public/laptopBG.webp";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Resume from "./Resume";
import Project from "./Project";

const PCView = () => {
  return (
    <div className="h-auto">
      <div
        id="home"
        className="relative h-[100vh] flex flex-col items-center justify-center space-y-20 bg-[#1a1c1e]"
      >
        <img
          src={laptopBG}
          alt="bg"
          loading="lazy"
          className="fixed h-[120vh] w-[120vw] -z-10 object-cover "
        />
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#03045e] via-[#0077b6] to-[#00b4d8]"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 95%)" }}
        ></div>
        <div className="absolute top-0 flex flex-col items-center justify-center space-y-20 mt-30">
          <EmojiEffect />
          <NameCenterDesign />
        </div>
      </div>
      <About />
      <Resume />
      <Experience />
      <Project />
      <Contact />
      <Footer />
      <NavBar />
    </div>
  );
};

export default PCView;
