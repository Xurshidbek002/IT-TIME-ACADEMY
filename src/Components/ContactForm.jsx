import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { style } from "../util/style";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const submitMessage = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const firstName = e.target.firstName.value;
    const telNumber = e.target.telNumber.value;
    if (!/^998\d{9}$/.test(telNumber)) {
      toast.error("Telefon raqamingizni to'g'ri kriting +998987654321");
      e.target.telNumber.focus();
      setIsLoading(false);
      return;
    }

    const text = `<b>Sizda yangi mijoz bor \nTezda bo'laning: </b> \n\n<b>Ismi: </b> ${firstName} \n<b>Telefon: </b> +${telNumber}`;
    const TOKEN = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
    const chatID = "6873538625";
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatID,
        text: text,
        parse_mode: "html",
      },
    })
      .then(() => {
        toast.success("Ajoyib! Tez orada siz bilan bog'lanishadi");
        e.target.reset();
      })
      .catch((err) => {
        toast.error("Yuborishda qandaydir xatolik. Admin bilan bog'laning!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className={`${style.container} py-16 text-center`}>
      <h2
        className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
        style={{ lineHeight: 1.4 }}
      >
        {t("contact.form.title")}
      </h2>
      <p className={`${style.textLg} text-gray-600 mb-10`}>
        {t("contact.form.desc")}
      </p>

      <form
        onSubmit={submitMessage}
        className="text-start max-w-md mx-auto space-y-6"
      >
        <div>
          <label
            className="block mb-1 text-md text-gray-700 font-medium"
            htmlFor="firstName"
          >
            {t("contact.form.label")}:
          </label>
          <input
            className="block w-full px-4 py-3 rounded-lg border border-gray-300"
            placeholder={t("contact.form.name")}
            type="text"
            name="firstName"
            id="firstName"
            required
          />
        </div>
        <div className="relative">
          <span className="absolute bottom-[14px] left-[13.5px]">+</span>
          <label
            className="block mb-1 text-md text-gray-700 font-medium"
            htmlFor="telNumber"
          >
            {t("contact.form.labelphone")}:
          </label>
          <input
            className="block w-full px-4 pl-6 py-3 rounded-lg border border-gray-300 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0"
            type="number"
            name="telNumber"
            id="telNumber"
            defaultValue="998"
            required
          />
        </div>
        <button
          className={`w-full ${style.btnRedNotG} ${
            isLoading ? "cursor-progress hover:bg-hover-900" : "cursor-pointer"
          }`}
          disabled={isLoading}
        >
          {t("contact.form.btn")}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
