import natureBG from "../public/natureBG.jpg";
import { GrSend } from "react-icons/gr";
import ButtonHighlightEffect from "./ButtonHighlightEffect";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <div className="relative overflow-hidden" id="contact">
      <img
        id="contact"
        className="h-[20vh] md:h-[50vh] w-[120vw] object-cover"
        src={natureBG}
      />
      <div className="absolute inset-0 h-full w-full  bg-black/50 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center ">
          <motion.div
            whileInView={{
              scale: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              },
            }}
            whileHover={{
              scale: 1.3,
              transition: { duration: 1, type: "spring", stiffness: 400 },
            }}
            initial={{ y: 0, x: 0 }}
            animate={
              isMobile
                ? {}
                : {
                    y: [-50, 150, -50],
                    x: [0, 800, -800, 0],
                    rotate: [0, 360],
                    transition: {
                      delay: 0.8,
                      duration: 3,
                      repeat: Infinity,
                    },
                  }
            }
          >
            <GrSend size={isMobile ? 50 : 100} className="rotate-30 " />
          </motion.div>
        </div>
        <ButtonHighlightEffect>
          <a
            href="mailto:paul.dibyojit2005@gmail.com"
            target="_blank"
            className="h-full w-full font-bold"
          >
            Contact Me
          </a>
        </ButtonHighlightEffect>
      </div>
    </div>
  );
};

export default Contact;
