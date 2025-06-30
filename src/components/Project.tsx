import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Project = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handleClick = (key: string) => {
    setDropDownOpen(false);
  };

  return (
    <div id="projects" className="h-[100vh] bg-gray-300 flex flex-col">
      <span className="text-5xl font-semibold p-5 mb-5">Projects</span>
      <div className="relative w-32 ml-5">
        <div
          className="bg-gray-400 w-full h-16 rounded-lg shadow-sm hover:text-blue-500 hover:border-b-3 hover:shadow-xl ransition-all duration-200 flex items-center"
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <MdArrowDropDown
            className={`h-full w-auto ${dropDownOpen ? "rotate-180" : ""}`}
          />
          <span className="text-2xl text-left font-semibold mr-3 select-none">
            Filters
          </span>
        </div>
        {dropDownOpen && (
          <div className="absolute bg-gray-400 w-full h-24 shadow flex flex-col items-center select-none">
            <div
              className="flex w-full h-12 border-b-3 border-gray-500 text-xl flex items-center justify-center rounded-lg"
              onClick={() => handleClick("Latest")}
            >
              Latest
            </div>{" "}
            <div
              className="flex w-full h-12 border-b-3 border-gray-500 text-xl flex items-center justify-center rounded-lg"
              onClick={() => handleClick("Oldest")}
            >
              Oldest
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
