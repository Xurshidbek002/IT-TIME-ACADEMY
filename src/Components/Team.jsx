import React from "react";
import { useTranslation } from "react-i18next";
import front from "../assets/frontentem.jpg";
import back from "../assets/backendteam.jpg";

const base = [
  {
    id: 1,
    img: front,
    title: "team.1.title",
    text: "team.1.text",
    icon: "💻",
  },
  {
    id: 2,
    img: back,
    title: "team.2.title",
    text: "team.2.text",
    icon: "🔧",
  },
];

function Team() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-gray-200 py-10">
        <div className="container">
          <h1 className="text-center font-extrabold text-4xl">
            {t("team.top")}
          </h1>
          <div className="w-29 rounded-2xl mx-auto mt-3 mb-5 h-1 bg-gradient-to-r from-[#174db7] via-[#299e9e] to-[#111a91] "></div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            {base.map((item) => (
              <div
                key={item.id}
                className="p-8 lg:max-w-100 relative bg-white rounded-3xl group duration-500 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute top-7 right-7 text-5xl z-1 float-animation -rotate-45 group-hover:rotate-0 translate-y-5 group-hover:translate-0 duration-500 opacity-0 group-hover:opacity-100">
                  {item.icon}
                </div>
                <div className="bg-[#6ee4ff]/16 translate-y-full group-hover:translate-y-0 duration-700 ease-in-out top-0 w-full h-full absolute left-0"></div>

                <img
                  src={item.img}
                  alt=""
                  className="w-full lg:max-w-94 rounded-2xl duration-500 h-80 lg:h-60 object-cover group-hover:-translate-y-2 group-hover:scale-110"
                />
                <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-extrabold text-black/80 lg:max-w-70 pt-5 group-hover:text-[#6fb9bb] duration-500">
                  {t(item.title)}
                </h2>
                <p className="text-gray-600 text-center lg:text-left text-md lg:text-xl pt-3 font-medium text-shadow-md">
                  {t(item.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
