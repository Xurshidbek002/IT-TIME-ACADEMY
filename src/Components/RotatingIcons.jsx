import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaCamera,
  FaGitkraken,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import logo from "../assets/logo.png";

const icons = [
  { fade: "500", icon: <FaCode size={35} />, label: "FRONT-END" },
  { fade: "1000", icon: <FaServer size={35} />, label: "BACK-END" },
  {
    fade: "1500",
    icon: <MdPhoneIphone size={35} />,
    label: "MOBILE DASTURLASH",
  },
  { fade: "500", icon: <FaGitkraken size={35} />, label: "SMM MARKETING" },
  { fade: "1000", icon: <FaPaintBrush size={35} />, label: "DIZAYN" },
  { fade: "1500", icon: <FaCamera size={35} />, label: "MOBILOGRF" },
];

const RotatingIcons = () => {
  const [radius, setRadius] = useState(160);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 130 : 160); // mobil: <640px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative max-w-[400px] h-[400px] mx-auto md:my-20">
      {/* Rotating container */}
      <div className="absolute w-full h-full animate-[spin_40s_linear_infinite]">
        {icons.map((item, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center group animate-[spin_reverse_40s_linear_infinite]"
              style={{
                top: `calc(50% + ${y}px - 31px)`,
                left: `calc(50% + ${x}px - 31px)`,
              }}
            >
              <div
                data-aos="zoom-out-up"
                data-aos-delay={item.fade}
                className="w-[60px] h-[60px] hover:scale-110 hover:shadow-[0_0_16px_red]/50 rounded-full bg-white shadow-md flex items-center justify-center text-red-500 transition-all duration-500"
              >
                {item.icon}
              </div>
              <p className="text-center absolute -bottom-7 w-50 font-bold text-sm text-gray-700 mt-1 hidden group-hover:inline transition duration-300">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Rotating border around logo */}
      <div className="absolute animate-[spin_5s_linear_infinite] top-1/2 left-1/2 w-[148px] md:w-[180px] h-[148px] md:h-[180px] border-t-3 border-red-500 rounded-full z-0 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={logo}
          data-aos="zoom-in"
          data-aos-duration="2000"
          alt="IT TIME ACADEMY"
          className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] rounded-full border-9 border-white shadow-[0_0_37px_red]/30 bg-white object-contain"
        />
      </div>
    </div>
  );
};

export default RotatingIcons;
