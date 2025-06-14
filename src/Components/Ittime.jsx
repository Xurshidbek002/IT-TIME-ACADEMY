import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RotatingIcons from "./RotatingIcons";
import Modal from "./Modal";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

function Ittime() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles-config.json", () => {
        console.log("Particles.js loaded via CDN ✅");
      });
    }
  }, []);
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
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
      setOpen(false);
    }
  };
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div
          id="particles-js"
          className="absolute top-0 left-0 w-full h-full z-0"
        ></div>
        <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-8 items-center h-[90vh]">
          <div className="flex flex-col gap-5 items-center text-center lg:text-left lg:items-start">
            <h2
              data-aos="fade-right"
              className="text-[30px] mt-3 md:text-[60px] font-[900] md:leading-15 bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent"
            >
              {t("boshi.title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-medium text-[15px] md:text-[15px]"
            >
              {t("boshi.text")}
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="500"
              className=""
            >
              <button
                onClick={handleModal}
                className="md:px-10 px-7 mt-4 py-3 md:py-4 rounded-xl font-bold text-white bg-gradient-to-tr transition duration-500 hover:from-red-800 hover:to-red-600 from-red-600 to-red-800"
              >
                {t("boshi.btn")}
              </button>
            </div>
          </div>
          <div className="right  -order-1 lg:order-none ">
            <RotatingIcons />
          </div>
        </div>
        {open && (
          <Modal onClose={handleModal}>
            <div className="bg-white relative h-full max-w-[270px] md:max-w-md mx-auto p-6 rounded-lg shadow-lg overflow-y-auto">
              <button
                onClick={handleModal}
                className="absolute right-5 top-5 text-2xl hover:bg-gray-200 rounded-full p-1"
              >
                <IoClose/>
              </button>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {t("header.modal.title")}
              </h2>
              <p className="text-sm md:text-xl text-gray-600 md:mb-4 mb-2">
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
    </div>
  );
}

export default Ittime;
