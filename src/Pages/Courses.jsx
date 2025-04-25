import React from "react";
import img1 from "../assets/course-1.png";
import img2 from "../assets/course-2.png";
import img3 from "../assets/course-3.png";
import { IoIosStar } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { IoTimeOutline } from "react-icons/io5";
import Offer from "../Components/Offer";
import { NavLink } from "react-router-dom";

const base = [
  {
    img: img1,
    tolov: "course.tolov",
    name: "Front-end",
    text: "course.frontend.text",
    pul: "course.frontend.pul",
    vaqt: "course.frontend.vaqt",
    to: "/courses/frontend", // ✅ TO‘G‘RI QILINDI
  },
  {
    img: img2,
    tolov: "course.tolov",
    name: "Back-end",
    text: "course.backend.text",
    pul: "course.backend.pul",
    vaqt: "course.backend.vaqt",
    to: "/courses/backend", // ✅ TO‘G‘RI QILINDI
  },
  {
    img: img3,
    tolov: "course.tolov",
    name: "Design",
    text: "course.design.text",
    pul: "course.design.pul",
    vaqt: "course.design.vaqt",
    to: "/courses/design", // ✅ TO‘G‘RI QILINDI
  },
];

function Courses() {
  const { t } = useTranslation();

  return (
    <div className="pt-35 mb-20 md:mx-10">
      <div className="container">
        <div className="flex flex-wrap gap-10 justify-between">
          {base.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl flex flex-col group items-start border border-black/10 w-80 mx-auto"
            >
              <img src={item.img} alt={item.name} className="" />
              <p className="flex items-center gap-1 bg-red-500 text-white px-5 py-[1px] rounded-br-full">
                <IoIosStar />
                {t(item.tolov)}
              </p>
              <div className="p-3">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-sm text-gray-500 pt-2 pb-2">{t(item.text)}</p>
                <div className="font-medium text-black/90">{t(item.pul)}</div>
                <div className="flex items-center gap-2 pt-2 pb-5 text-gray-500">
                  <IoTimeOutline />
                  {t(item.vaqt)}
                </div>
                <NavLink
                  to={item.to}
                  className="flex justify-center font-medium text-[17px] border-2 border-red-500 rounded-xl py-2 duration-400 hover:bg-red-500 hover:text-white"
                >
                  {t("course.btn")}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Offer />
    </div>
  );
}

export default Courses;
