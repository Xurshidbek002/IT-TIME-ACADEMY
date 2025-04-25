import React, { useRef, useState } from "react";

import akobir from "../assets/video/akobir.mp4";
import asilbek from "../assets/video/asilbek.mp4";
import muhammadislom from "../assets/video/muhammadislom.mp4";
import samandar from "../assets/video/samandar.mp4";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import { useTranslation } from "react-i18next";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoVolumeMediumSharp, IoVolumeMute } from "react-icons/io5";

const base = [
  {
    id: 1,
    title: "AKOBIR",
    grad: "graduates.graduate",
    video: akobir,
    yol: "graduates.yol",
    text: "graduates.text",
    comp: "graduates.company",
    company: "Limsa",
    pul: "700+",
    soqqa: "graduates.soqqa",
    texno: ["HTML", "CSS", "JavaScript", "React"],
    poster: poster1,
  },
  {
    id: 2,
    title: "ASILBEK",
    grad: "graduates.graduate",
    video: asilbek,
    yol: "graduates.yol",
    text: "graduates.text",
    comp: "graduates.company",
    company: "MARSITSCHOOL",
    pul: "900+",
    soqqa: "graduates.soqqa",
    texno: ["HTML", "SASS", "TypeScript", "React", "RestApi"],
    poster: poster2,
  },
  {
    id: 3,
    title: "MUHAMMADISLOM",
    grad: "graduates.graduate",
    video: muhammadislom,
    yol: "graduates.yol",
    text: "graduates.text",
    comp: "graduates.company",
    company: "IT WORKS",
    pul: "750+",
    soqqa: "graduates.soqqa",
    texno: [
      "Tailwind",
      "SASS",
      "JavaScript",
      "React",
      "Tailwind",
      "TypeScript",
    ],
    poster: poster3,
  },
  {
    id: 4,
    title: "SAMANDAR",
    grad: "graduates.graduate",
    video: samandar,
    yol: "graduates.yol",
    text: "graduates.text",
    comp: "graduates.company",
    company: "GREATSOFT",
    pul: "650+",
    soqqa: "graduates.soqqa",
    texno: ["HTML", "SASS", "JavaScript", "Veu 3", "Nuxt", "TypeScript"],
    poster: poster4,
  },
];

function Graduates() {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="container">
        <h2 className="text-center font-bold text-2xl md:text-4xl text-gray-950/80 pb-10 pt-10 ">
          {t("graduates.title")}
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
          {base.map((item) => (
            <VideoCard key={item.id} item={item} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoCard({ item, t }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="h-110 md:h-100 relative group rounded-2xl overflow-hidden">
      <video
        data-aos="flip-left"
        ref={videoRef}
        muted={isMuted}
        className="w-full h-full object-cover"
        poster={item.poster} // Rasm yuklang
      >
        <source type="video/mp4" src={item.video} />
        Sizning brauzeringiz ushbu videoni qo‘llab-quvvatlamaydi.
      </video>

      {/* Hover qilganda ko‘rinadigan overlay */}
      <div className="z-10 transform opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/80 to-black/0">
        <div className="p-5 h-full flex flex-col justify-between">
          {/* Tugmalar */}
          <div className="flex justify-end gap-4 text-red-500 text-md">
            <button onClick={toggleMute} className="p-3 bg-white rounded-full">
              {isMuted ? <IoVolumeMute /> : <IoVolumeMediumSharp />}
            </button>
            <button onClick={togglePlay} className="p-3 bg-white rounded-full">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>

          {/* Matnlar */}
          <div className=" flex flex-col items-start">
            <div className="text-white pb-2 font-bold text-[16px]">
              {item.title}
            </div>
            <div className=" bg-[#00a15633] mb-3 px-3 py-1 rounded-sm text-[11px] text-[#00a156] ">
              {t(item.grad)}
            </div>
            <h3 className="text-white pb-2">{t(item.yol)}</h3>
            <p className="text-white/70 text-sm">{t(item.text)}</p>

            <div className="flex gap-3 flex-wrap my-3">
              {item.texno.map((tex, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff17] text-[10px] px-2 py-1 rounded-full text-white"
                >
                  {tex}
                </div>
              ))}
            </div>

            <div className="text-white justify-between bg-black/50 w-full rounded-xl p-2 flex gap-10">
              <div>
                <p className="text-[10px] text-white/50">{t(item.comp)}</p>
                <div>{item.company}</div>
              </div>
              <div className="">
                <p className="text-[10px] text-white/50">{t(item.soqqa)}</p>
                <div className="relative">
                  <div className="relative text-red-500 z-10">{item.pul}</div>
                  <div className="absolute inset-0 bg-red-500 opacity-20 blur-md rounded-lg z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graduates;
