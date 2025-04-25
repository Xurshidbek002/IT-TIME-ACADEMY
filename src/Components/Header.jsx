import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { toast } from "react-toastify";
import {
  FaPhone,
  FaSpinner,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdSms } from "react-icons/md";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RiInstagramFill } from "react-icons/ri";
import Modal from "./Modal";
import { IoClose } from "react-icons/io5";

function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const menu = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    phone: "+998",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("header.modal.error.name");
    if (!formData.course) newErrors.course = t("header.modal.error.select");
    if (!/^\+998\d{2}\d{3}\d{2}\d{2}$/.test(formData.phone))
      newErrors.phone = t("header.modal.error.tel");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    const message = `📋 *Yangi so‘rov*%0A👤 Ism: ${formData.name}%0A📘 Kurs: ${formData.course}%0A📞 Tel: ${formData.phone}`;
    const TOKEN = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
    const CHAT_ID = "6873538625";
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}&parse_mode=Markdown`;

    try {
      await fetch(url);
      toast.success(t("header.modal.btn"));
      setFormData({ name: "", course: "", phone: "" });
    } catch (error) {
      toast.success(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="fixed w-full z-100"
      >
        <div className="bg-red-500 py-2 hidden md:block">
          <div className="container flex justify-between">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e?.target?.value)}
              className="focus:outline-none py-[2px] px-1 rounded-md text-white text-md font-bold"
            >
              <option className="text-black" value="uz">
                uz UZ
              </option>
              <option className="text-black" value="eng">
                us ENG
              </option>
              <option className="text-black" value="ru">
                ru RU
              </option>
              <option className="text-black" value="kr">
                uz KRL
              </option>
            </select>
            <div className="flex  gap-5 items-center text-md font-medium text-white">
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex hover:text-white/80 items-center gap-2"
                href="tel:+998332221123"
              >
                <FaPhone /> +998(33)2221123
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="700"
                className="flex hover:text-white/80 items-center gap-2"
                href="https://t.me/egoistfunny"
              >
                <FaTelegramPlane />
                Telegram
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="900"
                className="flex items-center transition duration-500 gap-2 hover:bg-white hover:text-red-500 border-[2px] border-white px-4 py-1 rounded-2xl"
                href="https://t.me/egoistmiz"
              >
                <MdSms />
                {t("header.top")}
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 shadow-md">
          <div className="container flex items-center justify-between">
            <a data-aos="fade-in" data-aos-delay="500" href="/" className="">
              <img src={logo} alt="" className="w-41" />
            </a>
            <nav className="hidden md:flex gap-4 items-center">
              <NavLink
                to="/"
                className="text-[18px] button font-medium text-gray-800"
              >
                {t("header.home")}
              </NavLink>
              <div
                data-aos="fade-up"
                data-aos-delay="2000"
                className="w-[2px] h-6 transform rotate-28 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              ></div>
              <NavLink
                to="/courses"
                className="text-[18px] button font-medium text-gray-800"
              >
                {t("header.courses")}
              </NavLink>
              <div
                data-aos="fade-up"
                data-aos-delay="2000"
                className="w-[2px] h-6 transform rotate-28 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              ></div>

              <NavLink
                to="/mentors"
                className="text-[18px] button font-medium text-gray-800"
              >
                {t("header.mentors")}
              </NavLink>
              <div
                data-aos="fade-up"
                data-aos-delay="2000"
                className="w-[2px] h-6 transform rotate-28 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              ></div>

              <NavLink
                to="/about"
                className="text-[18px] button font-medium text-gray-800"
              >
                {t("header.about")}
              </NavLink>
              <div
                data-aos="fade-up"
                data-aos-delay="2000"
                className="w-[2px] h-6 transform rotate-28 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              ></div>

              <NavLink
                to="/contact"
                className="text-[18px] button font-medium text-gray-800"
              >
                {t("header.contact")}
              </NavLink>
              <button
                onClick={handleModal}
                className="bg-red-500 text-xl hover:scale-103 rounded-[10px] font-bold hover:bg-red-400 transition duration-500 text-white px-4 py-[6px]"
              >
                {t("header.free")}
              </button>
            </nav>
            <div
              className={`flex flex-col gap-[9px] cursor-pointer z-20 md:hidden`}
              onClick={menu}
            >
              <div
                className={`h-[2px] rounded-2xl w-9 bg-red-500 transition-all duration-500 ${
                  isOpen ? "rotate-45 translate-y-[11px]" : ""
                }`}
              ></div>
              <div
                className={`h-[2px] rounded-2xl w-9 bg-red-500 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`h-[2px] rounded-2xl w-9 bg-red-500 transition-all duration-500 ${
                  isOpen ? "-rotate-45 -translate-y-[11px]" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 w-full "
            >
              <div className="w-full relative flex flex-col items-center h-screen z-10 bg-white p-5 ">
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e?.target?.value)}
                  className="focus:outline-none absolute top-5 left-5 py-[2px] px-1 rounded-md text-gray-800 text-md font-bold"
                >
                  <option className="text-black" value="uz">
                    uz UZ
                  </option>
                  <option className="text-black" value="eng">
                    us ENG
                  </option>
                  <option className="text-black" value="ru">
                    ru RU
                  </option>
                  <option className="text-black" value="kr">
                    uz KRL
                  </option>
                </select>
                <div className="flex flex-col items-center gap-3">
                  <a
                    className="flex items-center gap-2 text-gray-600 text sm:text-xl"
                    href="tel:+998332221123"
                  >
                    <FaPhone /> +998(33)2221123
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="https://t.me/egoistmiz"
                      className="text-gray-600 hover:text-red-500"
                    >
                      <FaTelegram size={25} />
                    </a>
                    <a href="" className="text-gray-600 hover:text-red-500">
                      <RiInstagramFill size={25} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full h-full gap-4 mt-5">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-xl font-semibold transition w-full duration-300 px-3 rounded-tl-md rounded-tr-md py-1 ${
                        isActive
                          ? "text-black w-full bg-red-100 border-red-500 border-b"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("header.home")}
                  </NavLink>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `text-xl font-semibold transition duration-300 w-full px-3 rounded-tl-md rounded-tr-md py-1 ${
                        isActive
                          ? "text-black w-full bg-red-100 border-red-500 border-b"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("header.courses")}
                  </NavLink>
                  <NavLink
                    to="/mentors"
                    className={({ isActive }) =>
                      `text-xl font-semibold transition duration-300 w-full px-3 rounded-tl-md rounded-tr-md py-1 ${
                        isActive
                          ? "text-black w-full bg-red-100 border-red-500 border-b"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("header.mentors")}
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-xl font-semibold transition duration-300 w-full px-3 rounded-tl-md rounded-tr-md py-1 ${
                        isActive
                          ? "text-black w-full bg-red-100 border-red-500 border-b"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("header.about")}
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `text-xl font-semibold transition duration-300 w-full px-3 rounded-tl-md rounded-tr-md py-1 ${
                        isActive
                          ? "text-black w-full bg-red-100 border-red-500 border-b"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("header.contact")}
                  </NavLink>
                  <button
                    onClick={() => {
                      handleModal();
                      menu();
                    }}
                    className="w-full bg-red-500 text-white font-bold py-2 px-5 rounded-xl hover:bg-red-400 transition"
                  >
                    {t("header.free")}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {open && (
        <Modal onClose={handleModal}>
          <div className="bg-white relative h-full max-w-[270px] md:max-w-md mx-auto p-6 rounded-lg shadow-lg overflow-y-auto">
            <button onClick={handleModal} className="absolute right-5 top-5 text-2xl hover:bg-gray-200 rounded-full p-1">
                          <IoClose />
                        </button>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {t("header.modal.title")}
            </h2>
            <p className="text-sm md:text-md text-gray-600 md:mb-4 mb-2">
              {t("header.modal.text")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input */}
              <input
                type="text"
                placeholder={t("header.modal.iname")}
                className={`w-full p-1 md:p-3 rounded outline-red-500 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              {/* Select input */}
              <select
                className={`w-full outline-red-500 p-1 md:p-3 rounded border  ${
                  errors.course ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
              >
                <option value="">{t("header.modal.select")}</option>
                <option value="Frontend">Frontend Development</option>
                <option value="Backend">Backend Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Data Science">Data Science</option>
                <option value="CyberSecurity">CyberSecurity</option>
              </select>
              {errors.course && (
                <p className="text-red-500 text-sm">{errors.course}</p>
              )}

              {/* Phone input */}
              <input
                type="tel"
                placeholder=""
                className={`w-full p-1 md:p-3 rounded outline-red-500 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex justify-center p-1 md:p-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
                disabled={sending}
              >
                {sending ? (
                  <FaSpinner className=" animate-spin" />
                ) : (
                  t("header.modal.btn")
                )}
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Header;
