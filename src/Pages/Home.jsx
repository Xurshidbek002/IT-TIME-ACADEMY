import React from "react";
import Ittime from "../Components/Ittime";
import Iconlar from "../Components/Iconlar";
import Section from "../Components/Section";
import { useTranslation } from "react-i18next";
import Graduates from "../Components/Graduates";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="pt-19">
      <Ittime />
      <Iconlar />
      <Section />
      <Graduates />
    </div>
  );
}

export default Home;
