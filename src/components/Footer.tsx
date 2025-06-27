import { BsMailbox } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";

const contactData = [
  {
    id: "github",
    icon: <FaGithub size={32} className="hover:text-gray-400 text-gray-300" />,
    link: "https://github.com/Yuuki-Nagisa",
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedin size={32} className="hover:text-blue-400 text-blue-500" />
    ),
    link: "https://www.linkedin.com/in/dibyojit-paul",
  },
  {
    id: "insta",
    icon: (
      <FaInstagram size={32} className="hover:text-pink-400 text-pink-500" />
    ),
    link: "https://www.instagram.com/yuuki_nagisa_",
  },
  {
    id: "mail",
    icon: <IoMdMail size={32} className="hover:text-gray-400 text-white" />,
    link: "mailto:paul.dibyojit2005@gmail.com",
  },
];
const Footer = () => {
  return (
    <div className="h-[25vh] bg-[#1a1c1e] flex flex-col items-center justify-around text-white">
      <div className="flex gap-8">
        {contactData.map(({ id, icon, link }) => (
          <a key={id} href={link}>
            {icon}
          </a>
        ))}
      </div>
      <div className="text-xs md:text-sm">
        <span> © 2025 Dibyojit Paul. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
