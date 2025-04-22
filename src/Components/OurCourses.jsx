import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAngular,
  FaGlobe,
  FaHtml5,
  FaJs,
  FaMinus,
  FaNodeJs,
  FaPhp,
  FaPlus,
  FaPython,
  FaReact,
  FaSearch,
  FaVuejs,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiDevexpress, SiMongodb, SiSpringsecurity } from "react-icons/si";
import { VscTools } from "react-icons/vsc";

const fronend = [
  { id: 1, icon: <FaReact />, name: "React.js", text: "cours.front.1" },
  { id: 2, icon: <FaVuejs />, name: "Vue.js", text: "cours.front.2" },
  { id: 3, icon: <FaAngular />, name: "Angular.js", text: "cours.front.3" },
  { id: 4, icon: <FaJs />, name: "JavaScript", text: "cours.front.4" },
  { id: 5, icon: <FaHtml5 />, name: "HTML/CSS", text: "cours.front.5" },
  { id: 6, icon: <FaPython />, name: "Python", text: "cours.front.6" },
];

const backend = [
  { id: 1, icon: <FaNodeJs />, name: "Node.js", text: "cours.back.1" },
  { id: 2, icon: <SiDevexpress />, name: "Express.js", text: "cours.back.2" },
  { id: 3, icon: <SiMongodb />, name: "MongoDb", text: "cours.back.3" },
  { id: 4, icon: <BiLogoPostgresql />, name: "SQL", text: "cours.back.4" },
  { id: 5, icon: <FaPhp />, name: "PHP", text: "cours.back.5" },
];

const xaker = [
  {
    id: 1,
    icon: <RiLockPasswordFill />,
    name: "cours.xack.1.title",
    text: "cours.xack.1.text",
  },
  {
    id: 2,
    icon: <SiSpringsecurity />,
    name: "cours.xack.2.title",
    text: "cours.xack.2.text",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    name: "cours.xack.3.title",
    text: "cours.xack.3.text",
  },
  {
    id: 4,
    icon: <FaSearch />,
    name: "cours.xack.4.title",
    text: "cours.xack.4.text",
  },
  {
    id: 5,
    icon: <VscTools />,
    name: "cours.xack.5.title",
    text: "cours.xack.5.text",
  },
];

function OurCourses() {
  const { t } = useTranslation();
  const [openTab, setOpenTab] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const handleClick = (tabName) => {
    setOpenTab((prev) => (prev === tabName ? null : tabName));
  };

  const renderCards = (data) => (
    <div
      className={`overflow-hidden shadow-2xl transition duration-500 ${
        openTab ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-white shadow-2xl rounded-bl-2xl rounded-br-2xl p-5 w-full text-black grid grid-cols-1 md:grid-cols-3 gap-7">
        {data.map((item) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay="300"
            className=""
          >
            <div className="bg-[#f9f9f9] flex flex-col justify-center p-5 h-50 items-center hover:scale-103 transition-all duration-300 rounded-2xl hover:shadow-[0px_4px_18px_#000]/10">
              <div className="text-3xl text-red-500">{item.icon}</div>
              <h3 className="text-xl text-[#1c6265] py-5 font-bold">
                {item.name}
              </h3>
              <p className="text-center text-sm">{t(item.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="md:px-10 mt-10 mb-10">
      <div className="container">
        <h2 className="text-center text-4xl font-bold py-13">
          {t("cours.title")}
        </h2>
        <div className="flex flex-col gap-8">
          <div>
            <button
              onClick={() => handleClick("frontend")}
              className={`${
                openTab === "frontend" ? "rounded-t-2xl" : "rounded-2xl"
              } bg-red-600 hover:bg-red-700 hover:shadow-[0px_15px_15px_#000]/10 cursor-pointer px-7 group py-5 w-full text-white hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="flex justify-between items-center">
                <div className="text-2xl font-medium">
                  {t("cours.frontend")}
                </div>
                <div>{openTab === "frontend" ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </button>
            {openTab === "frontend" && renderCards(fronend)}
          </div>

          <div>
            <button
              onClick={() => handleClick("backend")}
              className={`${
                openTab === "backend" ? "rounded-t-2xl" : "rounded-2xl"
              } bg-red-600 hover:bg-red-700 hover:shadow-[0px_15px_15px_#000]/10 cursor-pointer px-7 group py-5 w-full text-white hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="flex justify-between items-center">
                <div className="text-2xl font-medium">{t("cours.backend")}</div>
                <div>{openTab === "backend" ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </button>
            {openTab === "backend" && renderCards(backend)}
          </div>

          <div>
            <button
              onClick={() => handleClick("xaker")}
              className={`${
                openTab === "xaker" ? "rounded-t-2xl" : "rounded-2xl"
              } bg-red-600 hover:bg-red-700 hover:shadow-[0px_15px_15px_#000]/10 cursor-pointer px-7 group py-5 w-full text-white hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="flex justify-between items-center">
                <div className="text-2xl font-medium">{t("cours.xaker")}</div>
                <div>{openTab === "xaker" ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </button>
            {openTab === "xaker" && renderCards(xaker)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCourses;
