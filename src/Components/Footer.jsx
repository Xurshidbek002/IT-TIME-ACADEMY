import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footers() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-white via-pink-50 to-blue-50 p-8 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* IT TIME ACADEMY */}
        <div className="">
          <h2 className="text-2xl font-bold">IT TIME ACADEMY</h2>
          <div className="w-30 h-1 group-hover:w-45 duration-1000 ease-in-out bg-gradient-to-r mt-2 mb-4 from-blue-700 via-amber-800 to-fuchsia-950 rounded-2xl "></div>
          <p className="text-sm duration-500 hover:tracking-wide">{t("footer.description")}</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition float-animation"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition float1-animation"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition float-animation"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="group">
          <h3 className="text-xl font-semibold">{t("footer.quick_links")}</h3>
          <div className="w-20 h-1 group-hover:w-30 duration-1000 ease-in-out bg-gradient-to-r mt-2 mb-4 from-blue-700 via-amber-800 to-fuchsia-950 rounded-2xl "></div>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="duration-500 hover:tracking-widest">
                {t("footer.links.home")}
              </a>
            </li>
            <li>
              <a href="#" className="duration-500 hover:tracking-widest">
                {t("footer.links.courses")}
              </a>
            </li>
            <li>
              <a href="#" className="duration-500 hover:tracking-widest">
                {t("footer.links.mentors")}
              </a>
            </li>
            <li>
              <a href="#" className="duration-500 hover:tracking-widest">
                {t("footer.links.about")}
              </a>
            </li>
            <li>
              <a href="#" className="duration-500 hover:tracking-widest">
                {t("footer.links.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="group">
          <h3 className="text-xl font-semibold">{t("footer.contact_us")}</h3>
          <div className="w-30 h-1 group-hover:w-45 duration-1000 ease-in-out bg-gradient-to-r mt-2 mb-4 from-blue-700 via-amber-800 to-fuchsia-950 rounded-2xl "></div>

          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2 duration-500 hover:tracking-wide">
              <FaMapMarkerAlt className="mt-1 text-red-600" />{" "}
              {t("footer.address")}
            </li>
            <li className="flex items-center gap-2 duration-500 hover:tracking-wide">
              <FaPhone className="text-red-600" /> +998 (94) 782 00 92
            </li>
            <li className="flex items-center gap-2 duration-500 hover:tracking-wide">
              <FaEnvelope className="text-red-600" /> ittimeacademy@gmail.com
            </li>
            <li className="flex items-center gap-2 duration-500 hover:tracking-wide">
              <FaClock className="text-red-600" /> {t("footer.hours")}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
