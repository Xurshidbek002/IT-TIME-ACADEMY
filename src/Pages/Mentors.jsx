import React from "react";
import rustam from "../assets/rustam.jpg";
import gulbahor from "../assets/gulbahor.jpg";
import islom from "../assets/islom.png";
import behruz from "../assets/bexruz.jpg";
import dilshod from "../assets/dilshod.jpg";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const teacher = [
  {
    name: "Rustambek Mamadaliyev",
    img: rustam,
    linkin:
      "https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F",
    linktg: "https://t.me/the_rustambek",
    linkgit: "https://github.com/the-rustambek",
    upp: "mentors.rustam.upp",
    desc: "mentors.rustam.desc",
    text: "mentors.rustam.text",
    all: [
      "React.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "node.js",
      "AVS",
      "CI/CD",
    ],
  },
  {
    name: "G'ofurova Gulbahor",
    img: gulbahor,
    linkin:
      "https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F",
    linktg: "https://t.me/the_rustambek",
    linkgit: "https://github.com/the-rustambek",
    upp: "mentors.gulbahor.upp",
    desc: "mentors.gulbahor.desc",
    text: "mentors.gulbahor.text",
    all: [
      "Adobe Photoshop",
      "Illustrator",
      "Figma",
      "UI/UX",
      "After Effects",
      "Premiere Pro",
      "CorelDraw",
    ],
  },
  {
    name: "Islombek Rahimjonov",
    img: islom,
    linkin:
      "https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F",
    linktg: "https://t.me/the_rustambek",
    linkgit: "https://github.com/the-rustambek",
    upp: "mentors.islom.upp",
    desc: "mentors.islom.desc",
    text: "mentors.islom.text",
    all: [
      "ReactJS",
      "JavaScript",
      "Redux",
      "Material UI",
      "Bootstrap",
      "Git",
      "Webpack",
    ],
  },
  {
    name: "Behruzbek Nazarov",
    img: behruz,
    linkin:
      "https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F",
    linktg: "https://t.me/the_rustambek",
    linkgit: "https://github.com/the-rustambek",
    upp: "mentors.behruz.upp",
    desc: "mentors.behruz.desc",
    text: "mentors.behruz.text",
    all: ["ReactJS", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "Git"],
  },
  {
    name: "Dilshod Xolmatov",
    img: dilshod,
    linkin:
      "https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F",
    linktg: "https://t.me/the_rustambek",
    linkgit: "https://github.com/the-rustambek",
    upp: "mentors.dilshod.upp",
    desc: "mentors.dilshod.desc",
    text: "mentors.dilshod.text",
    all: [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Git",
      "Linux",
    ],
  },
];

function Mentors() {
  const { t } = useTranslation();
  return (
    <div className="pt-35 pb-10">
      <div className="container">
        <h1 className="text-center text-4xl font-extrabold text-red-500">
          {t("mentors.title")}
        </h1>
        <p className="text-center text-xl pt-2 text-gray-600">
          {t("mentors.text")}
        </p>
        <div className="flex mt-5 flex-col items-center gap-7">
          {teacher.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden flex flex-col md:flex-row w-full sm:w-[60%] md:w-[95%] lg:w-[80%] shadow-2xl"
            >
              <div data-aos="fade-left" className="relative">
                <div className="absolute bottom-5 left-5 flex gap-4 text-white text-2xl">
                  <a
                    href={item.linkgit}
                    className="p-[5px] bg-blue-400 rounded-md hover:-translate-y-1 duration-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={item.linkgit}
                    className="p-[5px] bg-blue-700 rounded-md hover:-translate-y-1 duration-400"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href={item.linkgit}
                    className="p-[5px] bg-gray-800 rounded-md hover:-translate-y-1 duration-400"
                  >
                    <FaGithub />
                  </a>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className=" object-cover h-70 w-full md:w-70"
                />
              </div>
              <div
                data-aos="fade-right"
                className="p-5 flex flex-col justify-between"
              >
                <div className="">
                  <h2 className="text-2xl font-bold text-black/80">
                    {item.name}
                  </h2>
                  <p className="text-red-400 pt-1 pb-3 font-medium text-shadow-[0_0_5px_red]/30">
                    {t(item.upp)}
                  </p>
                  <p className="max-w-200 text-sm text-gray-400">
                    {t(item.desc)}
                  </p>
                </div>
                <div className="">
                  <div className=" uppercase pb-2 text-gray-600 font-medium">
                    {t(item.text)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.all.map((child, index) => (
                      <div
                        key={index}
                        className="bg-red-100 text-red-500 text-sm px-2 rounded-xl"
                      >
                        {child}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
