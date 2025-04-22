import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoMdFlower } from "react-icons/io";

const base = [
  {
    id: 1,
    icon: <FaReact />,
    text: "React",
  },
  {
    id: 2,
    icon: <FaNode />,
    text: "Node.js",
  },
  {
    id: 3,
    icon: <FaGitAlt />,
    text: "Git",
  },
  {
    id: 4,
    icon: <FaPython />,
    text: "Pyton",
  },
  {
    id: 5,
    icon: <FaHtml5 />,
    text: "HTML5",
  },
  {
    id: 6,
    icon: <FaCss3Alt />,
    text: "CSS3",
  },
];

function Iconlar() {
  return (
    <div className="mt-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 transition duration-500 ">
          {base.map((item) => (
            <div
              key={item.id}
              className="relative flex group flex-col justify-between overflow-hidden h-27 rounded-2xl items-center transition duration-1000 bg-gradient-to-r from-[#5F1010] hover:from-[#330505] hover:to-[#1e1111] to-[#411F1F]"
            >
              <div className="absolute rotate-45  left-0 bg-red-700 px-1 py-1 text-white text-xl transition duration-500">
                <IoMdFlower />
              </div>
              <div className="absolute z-1 rotate-45  bottom-0 right-0 bg-red-700 px-1 py-1 text-white text-xl transition duration-500">
                <IoMdFlower />
              </div>
              <div className="h-1/2 flex group-hover:text-red-600 group-hover:scale-119 group-hover:rotate-6 transition duration-500 items-center text-[36px] text-white">
                {item.icon}
              </div>
              <div className="h-3/7 rounded-2xl transition duration-500 group-hover:scale-105 flex items-center text-[18px] text-center justify-center text-white font-bold  bg-[#59191B] w-full">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Iconlar;
