import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImSpinner8 } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [activ, setactive] = useState("kurs");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setLoading(true);

    const text = type === "kurs" ? "kursga" : "ishga";
    const TOKEN = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
    const CHAT_ID = "6873538625";
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `Yangi ariza: ${text}`,
        }),
      });

      toast.success("Xabar yuborildi!");
    } catch (err) {
      toast.error("Xabar yuborilmadi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-15">
      <div className="container">
        <div className="flex justify-center flex-col md:flex-row gap-5">
          <button
            onClick={() => setactive("kurs")}
            className={`px-4 py-2 rounded-md font-medium duration-500 ${
              activ === "kurs"
                ? "bg-red-500 text-white"
                : " bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {t("register.enroll")}
          </button>
          <button
            onClick={() => setactive("ish")}
            className={`px-4 py-2 rounded-md font-medium duration-500 ${
              activ === "ish"
                ? "bg-red-500 text-white"
                : " bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {t("register.job")}
          </button>
        </div>

        <div className="mt-5">
          {/* Kursga yozilish */}
          {activ === "kurs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pl-10">
              {/* Malumotlar */}
              <div data-aos="zoom-in">
                <h2 className="text-xl text-center md:text-left md:text-2xl font-medium">
                  {t("register.enrolls.title")}
                </h2>
                <p className="text-sm text-center md:text-left md:text-[17px] pt-3 text-gray-700">
                  {t("register.enrolls.text")}
                </p>
                <div className="mt-5 flex flex-col gap-7">
                  {["1", "2", "3"].map((num, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:gap-3 gap-2"
                    >
                      <div className="text-4xl flex items-center justify-center w-12 h-12 bg-gray-300 rounded-md">
                        {["🎓", "💻", "🌟"][i]}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">
                          {t(`register.enrolls.more.${num}.title`)}
                        </h3>
                        <p className="text-gray-600">
                          {t(`register.enrolls.more.${num}.text`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div
                data-aos="zoom-in"
                className="bg-gray-200 p-5 w-full h-auto rounded-2xl"
              >
                <h3 className="text-xl text-center font-medium">
                  {t("register.enrolls.form.title")}
                </h3>
                <form
                  className="shadow-[0_0_20px_#000]/10 rounded-2xl h-auto mt-5 flex flex-col gap-5 p-5"
                  onSubmit={(e) => handleSubmit(e, "kurs")}
                >
                  <input
                    required
                    type="text"
                    placeholder={t("register.enrolls.form.name")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  />
                  <input
                    required
                    type="tel"
                    defaultValue="+998"
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  />
                  <select className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5">
                    <option value="">{t("register.enrolls.form.curs")}</option>
                    <option value="frontent">FrontEnd</option>
                    <option value="backend">BackEnd</option>
                    <option value="mobile">Mobile</option>
                  </select>
                  <textarea
                    required
                    placeholder={t("register.enrolls.form.mess")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white bg-red-500 rounded-xl py-2 flex items-center justify-center gap-2"
                  >
                    {loading ? <ImSpinner8 className="animate-spin" /> : null}
                    {t("register.messbtn")}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Ishga yozilish */}
          {activ === "ish" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pl-10">
              <div data-aos="zoom-in">
                <h2 className="text-xl text-center md:text-left md:text-2xl font-medium">
                  {t("register.jobs.title")}
                </h2>
                <p className="text-sm text-center md:text-left md:text-[17px] pt-3 text-gray-700">
                  {t("register.jobs.text")}
                </p>
                <div className="mt-5 flex flex-col gap-7">
                  {["1", "2", "3"].map((num, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:gap-3 gap-2"
                    >
                      <div className="text-4xl flex items-center justify-center w-12 h-12 bg-gray-300 rounded-md">
                        {["💼", "🎯", "🚀"][i]}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">
                          {t(`register.jobs.more.${num}.title`)}
                        </h3>
                        <p className="text-gray-600">
                          {t(`register.jobs.more.${num}.text`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ish formasi */}
              <div
                data-aos="zoom-in"
                className="bg-gray-200 p-5 pb-10 w-full h-auto rounded-2xl"
              >
                <h3 className="text-xl text-center font-medium">
                  {t("register.jobs.form.title")}
                </h3>
                <form
                  className="shadow-[0_0_20px_#000]/10 rounded-2xl h-auto mt-5 flex flex-col gap-5 p-5"
                  onSubmit={(e) => handleSubmit(e, "ish")}
                >
                  <input
                    required
                    type="text"
                    placeholder={t("register.enrolls.form.name")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  />
                  <input
                    required
                    type="tel"
                    defaultValue="+998"
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  />
                  <input
                    required
                    type="email"
                    placeholder={t("register.jobs.form.gmail")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  />
                  <textarea
                    required
                    placeholder={t("register.jobs.form.about")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  ></textarea>
                  <textarea
                    required
                    placeholder={t("register.jobs.form.work")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  ></textarea>
                  <textarea
                    required
                    placeholder={t("register.jobs.form.skills")}
                    className="border border-gray-400 bg-white py-2 rounded-xl focus:outline-red-500 px-5"
                  ></textarea>
                  <label htmlFor="" className="flex flex-col">
                    {t("register.jobs.form.upload")}
                    <input
                      type="file"
                      className="border-2 text-white border-white w-23 px-1 rounded-sm bg-red-500"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white bg-red-500 rounded-xl py-2 flex items-center justify-center gap-2"
                  >
                    {loading ? <ImSpinner8 className="animate-spin" /> : null}
                    {t("register.messbtn")}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Registration;
