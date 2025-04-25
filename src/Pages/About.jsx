import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
   <div className="md:px-16">
     <div className="container">
      <section classNameName="text-center">
        <div className="about-header text-center">
          <div className="inline-flex mt-35 items-center rounded-[9999px] py-2 px-4 mb-4 text-sm bg-[#fee2e2] text-[#991b1b] font-semibold leading-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
            {t("aboutUs.since")}
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl leading-10 md:leading-none font-bold text-gray-900">
            {t("aboutUs.title")}
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            {t("aboutUs.subtitle")}
          </p>
          <p className="mx-auto mb-16 max-w-4xl text-lg leading-[1.625] text-gray-700 text-justify">
            {t("aboutUs.desc")}
          </p>
        </div>
        {/*  */}
        <div className="text-start grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div
            className="rounded-xl bg-white p-6 shadow-xl hover:scale-[1.05] scale-none transition-all ease-in-out duration-[1s]"
            data-aos="fade-left"
            data-aos-offset="50"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-[1.8rem] min-w-[50px] h-[50px] flex items-center justify-center text-[#ef4444] bg-[#f5f5f5] rounded-[10px] mb-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
            </svg>
            <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
              {t("aboutUs.item1.title")}
            </h3>
            <p className="text-gray-600">{t("aboutUs.item1.desc")}</p>
          </div>
          <div
            className="rounded-xl bg-white p-6 shadow-xl hover:scale-[1.05] scale-none transition-all ease-in-out duration-[1s]"
            data-aos="fade-left"
            data-aos-offset="50"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-[1.8rem] min-w-[50px] h-[50px] flex items-center justify-center text-[#ef4444] bg-[#f5f5f5] rounded-[10px] mb-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"></path>
            </svg>
            <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
              {t("aboutUs.item2.title")}
            </h3>
            <p className="text-gray-600">{t("aboutUs.item2.desc")}</p>
          </div>
          <div
            className="rounded-xl bg-white p-6 shadow-xl hover:scale-[1.05] scale-none transition-all ease-in-out duration-1000"
            data-aos="fade-left"
            data-aos-offset="50"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-[1.8rem] min-w-[50px] h-[50px] flex items-center justify-center text-[#ef4444] bg-[#f5f5f5] rounded-[10px] mb-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
            </svg>
            <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
              {t("aboutUs.item3.title")}
            </h3>
            <p className="text-gray-600">{t("aboutUs.item3.desc")}</p>
          </div>
        </div>
        {/* Count */}
        <div className="mb-16 rounded-2xl bg-white px-4 py-16 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="rounded-xl border-2 border-gray-100 hover:border-[#ef4444] bg-white py-4 sm:py-8 px-4 text-center transition-all duration-300 ease-in-out">
              <p className="mb-3 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-[2.5rem] sm:text-[3rem] leading-none font-bold text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.05)]">
                500+
              </p>
              <p className="text-[1.125rem] leading-7 font-medium text-gray-700">
                {t("aboutUs.count1")}
              </p>
            </div>
            <div className="rounded-xl border-2 border-gray-100 hover:border-[#ef4444] bg-white py-4 sm:py-8 px-4 text-center transition-all duration-300 ease-in-out">
              <p className="mb-3 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-[2.5rem] sm:text-[3rem] leading-none font-bold text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.05)]">
                10+
              </p>
              <p className="text-[1.125rem] leading-7 font-medium text-gray-700">
                {t("aboutUs.count2")}
              </p>
            </div>
            <div className="rounded-xl border-2 border-gray-100 hover:border-[#ef4444] bg-white py-4 sm:py-8 px-4 text-center transition-all duration-300 ease-in-out">
              <p className="mb-3 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-[2.5rem] sm:text-[3rem] leading-none font-bold text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.05)]">
                10+
              </p>
              <p className="text-[1.125rem] leading-7 font-medium text-gray-700">
                {t("aboutUs.count3")}
              </p>
            </div>
            <div className="rounded-xl border-2 border-gray-100 hover:border-[#ef4444] bg-white py-4 sm:py-8 px-4 text-center transition-all duration-300 ease-in-out">
              <p className="mb-3 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-[2.5rem] sm:text-[3rem] leading-none font-bold text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.05)]">
                80%
              </p>
              <p className="text-[1.125rem] leading-7 font-medium text-gray-700">
                {t("aboutUs.count4")}
              </p>
            </div>
          </div>
        </div>

        {/* Top */}
        <div className="advantages-section my-16 mt-18">
          <h2 className="mb-8 text-center text-3xl leading-9 font-bold text-gray-900">
            Top IT akademiya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="advantage-card p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">
                Xalqaro sertifikatlar
              </h3>
              <p className="text-gray-300">
                Xalqaro standartlarga mos sertifikatlar bilan ta'minlaymiz
              </p>
            </div>
            <div className="advantage-card p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">
                IT kompaniyalar bilan hamkorlik
              </h3>
              <p className="text-gray-300">
                Yetakchi IT kompaniyalar bilan hamkorlikda ish olib boramiz
              </p>
            </div>
            <div className="advantage-card p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Amaliy ta'lim</h3>
              <p className="text-gray-300">
                Nazariy bilimlar bilan birga amaliy ko'nikmalarni
                shakllantiramiz
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-12 rounded-xl bg-white px-5 py-9 shadow-md">
          <h2 className="mb-8 text-center text-3xl leading-9 font-bold text-gray-900">
            Bizning qadriyatlarimiz
          </h2>
          <div className="text-start grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div
              className="rounded-xl bg-white p-6 shadow-xl hover:scale-[1.05] scale-none transition-all ease-in-out duration-[1s]"
              data-aos="fade-left"
              data-aos-offset="50"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                className="text-[1.8rem] min-w-[50px] h-[50px] flex items-center justify-center text-[#ef4444] bg-[#f5f5f5] rounded-[10px] mb-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
              </svg>
              <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
                {t("aboutUs.item1.title")}
              </h3>
              <p className="text-gray-600">{t("aboutUs.item1.desc")}</p>
            </div>
            <div
              className="rounded-xl bg-white p-6 shadow-xl hover:scale-[1.05] scale-none transition-all ease-in-out duration-[1s]"
              data-aos="fade-left"
              data-aos-offset="50"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-[1.8rem] min-w-[50px] h-[50px] flex items-center justify-center text-[#ef4444] bg-[#f5f5f5] rounded-[10px] mb-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path>
              </svg>
              <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
                {t("aboutUs.item2.title")}
              </h3>
              <p className="text-gray-600">{t("aboutUs.item2.desc")}</p>
            </div>
            <div
              className="rounded-xl bg-white p-6 shadow-xl hover:scale-[1.05] scale-none transition-all ease-in-out duration-1000"
              data-aos="fade-left"
              data-aos-offset="50"
            >
              <svg
                className="text-[1.8rem] min-w-[50px] h-[50px] flex items-center justify-center text-[#ef4444] bg-[#f5f5f5] rounded-[10px] mb-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
              </svg>
              <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
                {t("aboutUs.item3.title")}
              </h3>
              <p className="text-gray-600">{t("aboutUs.item3.desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
   </div>
  );
};

export default About;
