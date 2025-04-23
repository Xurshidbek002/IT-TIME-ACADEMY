import React from "react";
import Ittime from "../Components/Ittime";
import Iconlar from "../Components/Iconlar";
import Section from "../Components/Section";
import Graduates from "../Components/Graduates";
import OurCourses from "../Components/OurCourses";
import Achievements from "../Components/Achievements";
import Registration from "../Components/Registration";
import OurMentors from "../Components/OurMentors";

function Home() {
  return (
    <div className="pt-19">
      <Ittime />
      <Iconlar />
      <Section />
      <Graduates />
      <OurCourses />
      <Achievements />
      <Registration />
      <OurMentors />
    </div>
  );
}

export default Home;
