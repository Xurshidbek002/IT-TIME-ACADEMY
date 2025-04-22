import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaChalkboardTeacher,
  FaDollarSign,
  FaMoneyBillWave,
  FaSun,
  FaWifi,
} from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";

const base = [
  {
    id: 1,
    title: "section.1.title",
    text: "section.1.text",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 2,
    title: "section.2.title",
    text: "section.2.text",
    icon: <FaDollarSign />,
  },
  {
    id: 3,
    title: "section.3.title",
    text: "section.3.text",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 4,
    title: "section.4.title",
    text: "section.4.text",
    icon: <TbDeviceDesktopCode />,
  },
  {
    id: 5,
    title: "section.5.title",
    text: "section.5.text",
    icon: <FaWifi />,
  },
  {
    id: 6,
    title: "section.6.title",
    text: "section.6.text",
    icon: <FaSun />,
  },
];
function Section() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#dedede3f] py-15 mt-15 pt-15 px-3 md:px-12">
      <div className="container">
        <div className="">
          <h2 className="text-3xl font-bold text-center">
            {t("section.title")}
          </h2>
          <div className="w-20 mx-auto mt-3 mb-3 h-[3px] bg-red-500"></div>
          <div className="flex flex-col gap-5 transition duration-500">
            {base.map((item) => (
              <div key={item.id} data-aos="zoom-in" className="">
                <div className="overflow-hidden hover:scale-105 transition duration-500 group relative p-5 md:p-10 pb-20 md:pb-20 rounded-2xl bg-white">
                  <div className="absolute w-45 h-45 -right-20 -top-20 group-hover:scale-120 duration-500 rounded-full bg-[#ff040421]"></div>
                  <div
                    className="absolute -bottom-1/7 left-17 bg-red-500 text-7xl rounded-xl text-white px-5 py-4 
             transition-all duration-300 ease-in-out
             group-hover:transform group-hover:skew-y-12 group-hover:scale-x-105 group-hover:-rotate-5 group-hover"
                  >
                    {item.icon}
                  </div>

                  <h2 className="text-3xl md:text-5xl text-gray-700 font-bold">
                    {t(item.title)}
                  </h2>
                  <div className="w-20 group-hover:w-35 duration-500 mt-3 mb-3 h-[3px] bg-red-500"></div>
                  <p className="pt-5 text-md bg-gray-50 md:text-xl font-medium text-gray-600">
                    {t(item.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
