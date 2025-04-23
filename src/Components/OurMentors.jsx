import React from "react";
import rustam from "../assets/rustam.jpg";
import gulbahor from "../assets/gulbahor.jpg";
import bexruz from "../assets/bexruz.jpg";
import dilshod from "../assets/dilshod.jpg";
import islom from "../assets/islom.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub, FaTelegram } from "react-icons/fa";

const base = [
  {
    id: 1,
    img: rustam,
    name: "Rustambek Mamadaliyev",
    yonalish: "ourmentors.rustam.daraja",
    desc: "ourmentors.rustam.text",
    bilim: "ReactJS, Vue.js, Angular, TypeScript, Node.js, AWS, CI/CD",
    linkedin:
      "https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F",
    telegram: "https://t.me/the_rustambek",
    github: "https://github.com/the-rustambek",
  },
  {
    id: 2,
    img: gulbahor,
    name: "G'ofurova Gulbahor",
    yonalish: "ourmentors.gulbahor.daraja",
    desc: "ourmentors.gulbahor.text",
    bilim:
      "Adobe Photoshop, Illustrator, Figma, UI/UX, After Effects, Premiere Pro, CorelDraw",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/username",
    github: "https://github.com/",
  },
  {
    id: 3,
    img: islom,
    name: "Islombek Raximjonov",
    yonalish: "ourmentors.islom.daraja",
    desc: "ourmentors.islom.text",
    bilim: "ReactJS, JavaScript, Redux, Material UI, Bootstrap, Git, Webpack",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/username",
    github: "https://github.com/",
  },
  {
    id: 4,
    img: bexruz,
    name: "Bexruzbek Nazarov",
    yonalish: "ourmentors.bexruz.daraja",
    desc: "ourmentors.bexruz.text",
    bilim: "ReactJS, TypeScript, Next.js, Redux, Tailwind CSS, Git",
    linkedin: "https://uz.linkedin.com/in/behruz-nazarov-73b53926a",
    telegram: "https://t.me/Bexruzbek_Nazarov",
    github: "https://github.com/NazarovBehruzbek",
  },
  {
    id: 5,
    img: dilshod,
    name: "Xolmatov Dilshod",
    yonalish: "ourmentors.dilshod.daraja",
    desc: "ourmentors.dilshod.text",
    bilim: "Python, Django, FastAPI, PostgreSQL, Docker, Git, Linux",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/username",
    github: "https://github.com/",
  },
];

function OurMentors() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[#eaeaea72] py-20">
        <h1 className="text-center text-3xl font-semibold text-red-500 pb-4">
          {t("ourmentors.title")}
        </h1>
        <p className="text-center text-gray-700 pb-5">{t("ourmentors.text")}</p>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            navigation={true}
            // pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              650: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
            }}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
            className="py-10 pb-20"
          >
            {base.map((item) => (
              <SwiperSlide
                key={item.id}
                className="bg-white overflow-hidden rounded-2xl group"
              >
                <div className="max-md:h-100 md:h-99 transition duration-500 rounded-2xl p-5  hover:shadow-[inset_0_0_17px_#000]/10">
                  <div className="group-hover:scale-98 duration-700  flex flex-col items-center h-full">
                    <div className="mx-auto relative">
                      <div className="bg-white w-30 flex justify-center z-10">
                        <div className=" rounded-full overflow-hidden border-5 border-red-500">
                          <img
                            src={item.img}
                            alt=""
                            className="w-20 h-20 object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -z-1 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 group-hover:w-55 duration-1000 h-9 rounded-xl border-2 border-red-500">
                        <div className=" relative w-full h-full">
                          <div className="w-1 h-1 bg-red-300 group-hover:scale-130 duration-1000 rounded-full absolute -top-3 -left-3"></div>
                          <div className="w-1 h-1 bg-red-300 group-hover:scale-130 duration-1000 rounded-full absolute -top-3 -right-3"></div>
                          <div className="w-1 h-1 bg-red-300 group-hover:scale-130 duration-1000 rounded-full absolute -bottom-3 -left-3"></div>
                          <div className="w-1 h-1 bg-red-300 group-hover:scale-130 duration-1000 rounded-full absolute -bottom-3 -right-3"></div>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-center font-bold text-xl text-gray-700 pt-3">
                      {item.name}
                    </h2>
                    <p className="text-center text-sm text-red-500">
                      {t(item.yonalish)}
                    </p>
                    <div className="w-20 group-hover:w-40 my-3 h-[2px] bg-gradient-to-r from-white/0 via-red-500 to-white/0  duration-500 "></div>
                    <p className="text-sm text-center text-gray-500">{t(item.desc)}</p>
                    <div className="w-35 group-hover:w-full my-3 h-[1.5px] bg-gradient-to-r from-white/0 via-red-500 to-white/0  duration-500 "></div>

                    <div className="text-center font-medium max-w-[85%] text-gray-800 text-sm">{item.bilim}</div>
                    <div className="w-25 group-hover:w-45 my-3 h-[1px] bg-gradient-to-r from-white/0 via-red-500 to-white/0 duration-500 "></div>
                  </div>
                  <div className="flex translate-y-9 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-800 absolute left-1/2 -translate-x-1/2 bottom-5 gap-3">
                    <a
                      href={item.linkedin}
                      className="bg-gray-300 p-[8px] text-[19px] hover:-translate-y-1 transition duration-500 text-gray-700 hover:bg-red-500 hover:text-white rounded-full"
                    >
                      <FiLinkedin />
                    </a>
                    <a
                      href={item.linkedin}
                      className="bg-gray-300 p-[8px] text-[19px] hover:-translate-y-1 transition duration-500 text-gray-700 hover:bg-red-500 hover:text-white rounded-full"
                    >
                      <FaTelegram />
                    </a>
                    <a
                      href={item.linkedin}
                      className="bg-gray-300 p-[8px] text-[19px] hover:-translate-y-1 transition duration-500 text-gray-700 hover:bg-red-500 hover:text-white rounded-full"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OurMentors;
