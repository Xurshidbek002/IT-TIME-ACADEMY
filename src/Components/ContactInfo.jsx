import { useTranslation } from "react-i18next";
import { FaLocationArrow, FaPhone, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
          <div
            className="bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg border border-white/50 h-[400px]"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#1a1a1a]">
              {t("contact.info.title")}
            </h3>
            <div className="space-y-3 flex-grow pr-2">
              {/* item-1 */}
              <a
                target={"_blank"}
                href="https://t.me/it_time"
                className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaTelegram className="text-white" />
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-[#1a1a1a]">
                      {t("contact.info.tg")}
                    </h3>
                    <p class="text-[#666] text-xs">@it_time</p>
                  </div>
                </div>
              </a>
              {/* item-2 */}
              <a
                href="tel:+998947820092"
                className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-[#1a1a1a]">
                      {t("contact.info.phone")}
                    </h3>
                    <p class="text-[#666] text-xs">+998 (94) 782 00 92</p>
                  </div>
                </div>
              </a>
              {/* item-3 */}
              <a
                href="mailto:ittimeacademy@gmail.com"
                className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <MdEmail className="text-white"/>
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-[#1a1a1a]">
                      {t("contact.info.email")}
                    </h3>
                    <p class="text-[#666] text-xs">ittimeacademy@gmail.com</p>
                  </div>
                </div>
              </a>
              {/* item-4 */}
              <a
                target={"_blank"}
                href="https://maps.app.goo.gl/fHktfXAVEzj5ofsS9"
                className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaLocationArrow className="text-white"/>
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-[#1a1a1a]">
                      {t("contact.info.add")}
                    </h3>
                    <p class="text-[#666] text-xs">
                      Toshkent, Amir Temur shoh ko‘chasi, 100A.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/*  */}
          <div
            className="bg-white/90 overflow-hidden rounded-2xl shadow-lg border border-white/50 h-[400px]"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6388133818755!2d69.28315707593532!3d41.33846677130605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sen!2s!4v1745149005937!5m2!1sen!2s"
              width="600"
              height="450"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
