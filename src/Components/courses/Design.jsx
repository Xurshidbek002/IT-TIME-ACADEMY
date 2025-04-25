import React, { useState } from "react";
import img from "../../assets/course-3.png";
import Modal from "../Modal";
import { IoClose } from "react-icons/io5";

function Design() {
  const [modal, ismodal] = useState(false);
  const handleModal = () => {
    ismodal(!modal);
  };
  return (
    <div className="py-35">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <div className="md:w-1/2 lg:w-2/5 flex flex-col items-center lg:items-start">
            <img src={img} alt="" className="w-full" />
            <h3 className="font-bold text-3xl text-red-500 py-5">
              Kurs haqida
            </h3>
            <p className="text-center lg:text-left text-gray-500">
              Frontend veb-ishlab chiqish. HTML, CSS, JavaScript, React va
              boshqa zamonaviy texnologiyalar.
            </p>
            <h3 className="font-bold text-3xl text-red-500 py-5">
              Davomiyligi
            </h3>
            <div className="text-center lg:text-left text-gray-500">6-oy</div>
            <button
              onClick={handleModal}
              className=" bg-red-500 py-2 px-4 font-bold text-white rounded-2xl mt-5"
            >
              Bolib tolash uchun nima kerak
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold ">Design</h2>
            <div className="p-3 shadow-md rounded-2xl">
              <h2 className="text-2xl text-gray-700 font-medium">
                Kursning to'liq narxi
              </h2>
              <h1 className="text-3xl py-4 font-bold text-red-500">
                1 200 000 so'm / oy
              </h1>
              <div className="text-gray-500">Oylik to'lov</div>
              <hr className="text-gray-300 my-2" />
              <div className="text-2xl text-gray-700 font-medium">
                Jami to'lov
              </div>
              <div className="text-3xl py-4 font-bold text-red-500">
                7 200 000 so'm
              </div>
            </div>
            <div className="p-3 shadow-md rounded-2xl">
              <div className="text-2xl text-gray-700 font-medium">
                Bo'lib to'lash shartlari
              </div>
              <div className="text-3xl py-4 font-bold text-red-500">
                1 560 000 so'm / oy
              </div>
              <div className="text-gray-500">Oylik to'lov</div>
              <hr className="text-gray-300 my-2" />
              <div className="text-2xl text-gray-700 font-medium">
                Bo'lib to'lash bilan jami
              </div>
              <div className="text-3xl py-4 font-bold text-red-500">
                9 360 000 so'm
              </div>
              <div className="text-gray-500">
                Bo'lib to'lash haqida muhim ma'lumot
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal onClose={handleModal}>
          <div className="bg-white p-9 max-w-120 rounded-2xl relative">
            <button
              onClick={handleModal}
              className="absolute right-5 top-5 text-2xl hover:bg-gray-200 rounded-full p-1"
            >
              <IoClose />
            </button>
            <div className=" flex flex-col gap-3">
              <h1 className="text-2xl font-extrabold pb-5 ">
                Bo'lib to'lash shartlari!
              </h1>
              <p className="pb-3 text-gray-500">Bo'lib to'lash haqida muhim ma'lumot</p>
              <p className="">
                {" "}
                <span className="text-emerald-500">✓</span> Bo'lib to'lash uchun
                siz rasmiy ishlaydigan bo'lishingiz kerak
              </p>
              <p className="">
                {" "}
                <span className="text-emerald-500">✓</span> Agar ishlamayotgan
                bo'lsangiz, rasmiy ishlaydigan kafil kerak bo'ladi
              </p>
              <p className="">
                {" "}
                <span className="text-emerald-500">✓</span> Passport talab
                qilinadi (sizniki va kafilniki, agar kerak bo'lsa)
              </p>
              <p className="">
                {" "}
                <span className="text-emerald-500">✓</span> To'lov o'qishni
                tugatganingizdan 2 oy o'tgach to'lab kelishingiz zarur bo'ladi!
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Design;
