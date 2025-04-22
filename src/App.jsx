import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Components/Loading";
import { FaBookOpen, FaHome, FaInfoCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

const nav = [
  {
    id: 1,
    icon: <FaHome />,
    link: "/",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    link: "/courses",
  },
  {
    id: 3,
    icon: <IoIosPeople />,
    link: "/mentors",
  },
  {
    id: 4,
    icon: <BsTelephoneFill />,
    link: "/about",
  },
  {
    id: 5,
    icon: <FaInfoCircle />,
    link: "/contact",
  },
];

function App() {
  const pathname = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    let scrollTriggered = false;
    let idleTimer;
    let initialTimer = setTimeout(() => {
      setShowNav(true);
    }, 4000); // 4 sekunddan keyin chiqadi

    const handleScroll = () => {
      if (!scrollTriggered) {
        setShowNav(true);
        scrollTriggered = false; // faqat birinchi scroll bo‘lganda chiqadi
      }
      resetIdleTimer();
    };

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setShowNav(false); // 3 sekund qimirlamasa panel yashirinadi
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(idleTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [showApp, setShowApp] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setShowApp(true);
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, 500);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!showApp) {
    return <Loading />;
  }

  return (
    <div>
      <div
        className={`top-1/2 -translate-y-1/3 fixed flex flex-col gap-3 z-100 transition-transform duration-500 ${
          showNav ? "translate-x-0 left-0" : "-translate-x-full"
        }`}
      >
        {nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `bg-red-600 text-[25px] hover:text-[26px] text-white ${
                isActive ? "w-17" : "w-14"
              } duration-200 h-12 hover:w-15 flex items-center justify-center rounded-tr-sm rounded-br-sm overflow-hidden relative`
            }
          >
            {item.icon}
            <div className="bg-gradient-to-l from-red-600 to-red-500 w-full h-3 absolute top-0"></div>
            <div className="bg-gradient-to-b from-red-700 to-red-500 h-full w-2 absolute right-0"></div>
          </NavLink>
        ))}
      </div>
      <Header />
      <Outlet />

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
