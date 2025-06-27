import { motion, useScroll, useTransform } from "motion/react";
// import ButtonHighlightEffect from "./components/buttonHighlightEffect";
import EmojiEffect from "./components/EmojiEffect";
import NameCenterDesign from "./components/NameCenterDesign";
import NavBar from "./components/NavBar";
import About from "./components/About";
import laptopBG from "./public/laptopBG.jpg";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";
import PCView from "./components/PCView";
import MobileView from "./components/MobileView";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  if (isMobile) return <MobileView />;
  return <PCView />;
};

export default App;
