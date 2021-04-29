/** @format */

import React from "react";
import { FaReact, FaJira, FaHtml5 } from "react-icons/fa";
import { DiJavascript, DiCss3, DiBootstrap, DiJava } from "react-icons/di";
import { SiRedux, SiTypescript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const MySkills = () => {
  return (
    <section className="skills-section">
      <div className="skills">
        <div className="icon-container">
          <FaReact />
          <p>React</p>
        </div>
        <div className="icon-container">
          <DiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="icon-container">
          <SiRedux />
          <p>Redux</p>
        </div>
        <div className="icon-container">
          <DiCss3 />
          <p>Css</p>
        </div>
        <div className="icon-container">
          <FaHtml5 />
          <p>HTML</p>
        </div>
      </div>
      <div className="skills">
        <div className="icon-container">
          <DiBootstrap />
          <p>Bootstrap</p>
        </div>
        <div className="icon-container">
          <AiFillGithub />
          <p>GitHub</p>
        </div>
        <div className="icon-container">
          <FaJira />
          <p>Jira</p>
        </div>
        <div className="icon-container">
          <DiJava />
          <p>Java</p>
        </div>
        <div className="icon-container">
          <SiTypescript />
          <p>Typescript</p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
