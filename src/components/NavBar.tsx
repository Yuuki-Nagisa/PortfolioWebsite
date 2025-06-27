import React from "react";

const NavBar = () => {
  const navButtons = ["About", "Experience", "Projects", "Contact"];
  return (
    <div className="fixed inset-0 w-[100wh] h-[10vh] p-5 z-10">
      <div className="flex justify-between items-center ">
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
      </div>
    </div>
  );
};

export default NavBar;
