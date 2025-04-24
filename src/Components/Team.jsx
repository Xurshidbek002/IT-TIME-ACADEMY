import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import front from "../assets/frontentem.jpg";
import back from "../assets/backendteam.jpg";
import img1 from "../assets/m1.png";
import img2 from "../assets/m2.png";
import img3 from "../assets/m3.jpg";
import img4 from "../assets/m4.svg";
import img5 from "../assets/m5.png";
import img6 from "../assets/m6.svg";
import img7 from "../assets/m7.jpg";
import img8 from "../assets/m8.png";
import Marquee from "react-fast-marquee";
import mult1 from "../assets/mult1.jpg";
import mult2 from "../assets/mult2.jpg";
import mult3 from "../assets/mult3.jpg";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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

const marque = [
  {
    icon: img1,
  },
  {
    icon: img2,
  },
  {
    icon: img3,
  },
  {
    icon: img4,
  },
  {
    icon: img5,
  },
  {
    icon: img6,
  },
  {
    icon: img7,
  },
  {
    icon: img8,
  },
];

function Team() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true), setSent(false);
    const token = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
    const chatId = "6873538625";
    const yubor = `Yangi xabar \n\n Ism: ${name}\n Telefon raqam: ${phone}`;
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: yubor,
        }),
      }).then((res) => {
        toast.success("Succes");
        console.log(res);
        setName("");
        setPhone("");
        setSent(true);
      });
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Xabar yuborilmadi");
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

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

        <div className="my-15 bg-white/50 py-8">
          <h1 className="text-center text-4xl">{t("team.part")}</h1>
          <div className="w-29 rounded-2xl mx-auto mt-3 mb-5 h-1 bg-gradient-to-r from-[#174db7] via-[#299e9e] to-[#111a91] "></div>
          <Marquee gradient={false} speed={50} className="py-8 bg-white">
            {marque.map((item, index) => (
              <img key={index} src={item.icon} alt="" className="w-25 mx-10" />
            ))}
          </Marquee>
        </div>

        <div className="">
          <div className="container">
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row  md:justify-between">
              <div className="p-[1.3px] md:w-7/10 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mx-4">
                <div className="bg-gray-200 rounded-3xl p-5">
                  <div className="text-center md:text-2xl font-medium text-gray-600">
                    {t("team.bottom.text")}
                  </div>
                  <div className="mx-auto my-5 flex justify-center gap-5 items-center">
                    <img
                      src={mult1}
                      alt=""
                      className="w-20  md:w-35 brightness-80 float-animation"
                    />
                    <img
                      src={mult2}
                      alt=""
                      className="w-25  md:w-40 float1-animation"
                    />
                    <img
                      src={mult3}
                      alt=""
                      className="w-20  md:w-35 brightness-80 float-animation"
                    />
                  </div>
                </div>
              </div>
              <div className="p-[1.3px] md:w-3/10 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mx-4">
                <div className="bg-gray-200 w-full h-full rounded-3xl p-5">
                  <div className="text-xl font-medium text-center">
                    {t("team.bottom.form.title")}
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    action=""
                    className="py-3 flex flex-col gap-3 justify-between md:pb-7 h-full"
                  >
                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={t("team.bottom.form.name")}
                        className="bg-white w-full rounded-2xl outline-transparent focus:outline-red-400 outline-1 px-3 py-3"
                      />
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="tell"
                        required
                        placeholder="+998 XX XXX XX XX"
                        className="bg-white w-full rounded-2xl outline-transparent focus:outline-red-400 outline-1 px-3 py-3"
                      />
                    </div>
                    <button
                      type="submit"
                      className={`relative overflow-hidden cursor-pointer text-xl flex justify-center items-center font-extrabold h-12 rounded-xl text-white duration-500 ${
                        loading
                          ? "bg-blue-600"
                          : sent
                          ? "bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 cursor-not-allowed"
                          : "bg-red-500"
                      }`}
                    >
                      {/* Text */}
                      <span
                        className={`absolute transition-all duration-500 ${
                          loading || sent
                            ? "-translate-y-10 opacity-0"
                            : "translate-y-0 opacity-100"
                        }`}
                      >
                        {t("team.bottom.form.btn")}
                      </span>

                      {/* Loading Icon */}
                      <FaSpinner
                        className={`absolute animate-spin text-3xl transition-all duration-500 ${
                          loading
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                      />

                      {/* Sent Icon */}
                      <FaCheck
                        className={`absolute transition-all text-3xl duration-500 ${
                          sent && !loading
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
