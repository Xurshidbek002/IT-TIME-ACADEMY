import React, { useState } from "react";
import qiz from "../assets/qiz.jpg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { IoClose } from "react-icons/io5";

function Offer() {
  const { t } = useTranslation();

  const [modal, ismodal] = useState(false);
  const handleModal = () => {
    ismodal(!modal);
  };
  return (
    <div className="py-10 md:px-15">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
        <div className=" lg:h-130 shadow-2xl overflow-hidden group rounded-3xl duration-500 relative -skew-y-1 hover:skew-0">
          <div className="absolute flex flex-col items-center z-10 bg-white border-4 rounded-2xl border-red-500 w-40 right-5 top-5">
            <div className="text-red-400">{t("offer.bonus")}</div>
            <h3 className="text-3xl text-gray-700 font-bold">500 000</h3>
            <div className="text-gray-500">{t("offer.sum")}</div>
          </div>
          <img
            src={qiz}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 duration-500  "
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="bg-red-100 text-red-500 py-1 px-2 rounded-2xl">
            {t("offer.top")}
          </p>
          <h2 className="text-4xl md:text-6xl font-[900] text-gray-800">
            {t("offer.title1")}
            <span className="text-red-500 text-shadow-[0_0_5px]">
              {t("offer.titlespan")}
            </span>
            {t("offer.title2")}
          </h2>
          <p className="text-gray-500">{t("offer.text")}</p>
          <div className="flex flex-col items-start gap-4">
            <p className="">{t("offer.1")}</p>
            <p className="">{t("offer.2")}</p>
            <p className="">{t("offer.3")}</p>
            <p className="">{t("offer.4")}</p>
          </div>
          <button
            onClick={handleModal}
            className="bg-red-500 text-xl px-5 py-2 flex gap-2 group text-white cursor-pointer rounded-xl"
          >
            {t("offer.btn")}
            <span className="group-hover:translate-x-2 duration-500"> ⟶</span>
          </button>
          <p className="text-gray-500">{t("offer.ch")}</p>
        </div>
      </div>

      {modal && (
        <Modal onClose={handleModal}>
          <div className="bg-white p-5 max-w-120 rounded-2xl relative">
            <button
              onClick={handleModal}
              className="absolute right-5 top-5 text-2xl hover:bg-gray-200 rounded-full p-1"
            >
              <IoClose />
            </button>
            <div className="">
              <h1 className="text-2xl font-extrabold pb-5">Super Aksiya!</h1>
              <p className="text-gray-600 pb-4">
                Do'stingizni taklif qiling va bonus oling!
              </p>
              <div className="font-medium pb-1">Aksiya shartlari:</div>
              <div className="pb-3">
                <span className="text-green-500 font-extrabold">✓</span> Siz
                bizning talabamiz (hozirgi yoki sobiq) kamida 1 oy bo'lishingiz
                kerak
              </div>
              <div className="">
                <span className="text-green-500 font-extrabold">✓</span>{" "}
                Do'stingizni akademiyamizda o'qishga taklif qiling
              </div>
              <div className="p-3 mt-4 rounded-2xl bg-gray-200  flex flex-col gap-3">
                <h3 className="text-blue-600 font-extrabold">
                  Sizning bonuslaringiz:
                </h3>
                <p className="">
                  💰 Siz keyingi to'lov yoki kurs uchun 500 000 so'm olasiz
                </p>
                <p className="">
                  🎁 Do'stingiz o'qish uchun 20% chegirma oladi
                </p>
              </div>
              <div className=" text-gray-400 pt-4">
                * Aksiya barcha shartlar bajarilganda amal qiladi
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Offer;
