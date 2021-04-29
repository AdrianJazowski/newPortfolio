/** @format */

import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import MySkills from "../Components/MySkills";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"O mnie"} span={"o mnie"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <MySkills />
    </div>
  );
}

export default AboutPage;
