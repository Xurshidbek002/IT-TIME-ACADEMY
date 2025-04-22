import React from "react";
import { style } from "../util/style";
import { useTranslation } from "react-i18next";

const card = [
  {
    id: 1,
    icon: "🏆",
    text: "achiev.bcard.1",
  },
  {
    id: 2,
    icon: "🌐",
    text: "achiev.bcard.2",
  },
  {
    id: 3,
    icon: "🤝",
    text: "achiev.bcard.3",
  },
  {
    id: 4,
    icon: "📚",
    text: "achiev.bcard.4",
  },
];

const Achievements = () => {
  const { t } = useTranslation();
  return (
    <section className="info-container px-5 py-15 relative overflow-hidden [background:linear-gradient(135deg,#dc2626,#991b1b)]">
      <div className={style.container}>
        <h2
          className="text-center text-white font-semibold text-2xl md:text-3xl lg:text-4xl  relative text-shadow-[2px_2px_4px_rgba(0_0_0_/_0.3)]"
          data-aos="fade-right"
          data-aos-offset="50"
        >
          {t("achiev.ttitle")}
        </h2>
        <div className="mx-auto w-30 rounded-2xl mb-8 mt-5 h-1 bg-white/50"></div>
        <div className="mb-12 grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-4">
          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20"
            data-aos="fade-right"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              🎓
            </div>
            <div className="text-main text-red-500 text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              5+
            </div>
            <div className="text-md mt-2 text-[#666]">
              {t("achiev.tcard.1")}
            </div>
          </div>
          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              👨‍🎓
            </div>
            <div className="text-main text-red-500 text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              500+
            </div>
            <div className="text-mf mt-2 text-[#666]">
              {t("achiev.tcard.2")}
            </div>
          </div>
          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              💼
            </div>
            <div className="text-main text-red-500 text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              80%
            </div>
            <div className="text-md mt-2 text-[#666]">
              {t("achiev.tcard.3")}
            </div>
          </div>

          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              🌟
            </div>
            <div className="text-main text-red-500 text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              4.9
            </div>
            <div className="text-md mt-2 text-[#666]">
              {t("achiev.tcard.4")}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl">
          <div className="text-center p-12 bg-gradient-to-r from-white to-red-500/20 rounded-2xl">
            <h3
              data-aos="fade-right"
              className="text-red-600 text-xl font-medium md:text-[33px] mb-6 "
            >
              {t("achiev.btitle")}
            </h3>
            <p data-aos="fade-left" className="text-sm max-w-[70%] mx-auto">
              {t("achiev.text")}
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
              {card.map((item) => (
                <div
                  key={item.id}
                  className="h-47 z-0 p-5 pt-10 rounded-2xl float-animation  border-1 border-white bg-gradient-to-tr from-white to-red-500/10 shadow-xl hover:-translate-y-5 duration-1000"
                >
                  <p className="text-4xl">{item.icon}</p>
                  <div className="pt-3 font-semibold text-gray-700">
                    {t(item.text)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
