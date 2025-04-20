import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Components/Loading";

function App() {
  const pathname = useLocation();
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
