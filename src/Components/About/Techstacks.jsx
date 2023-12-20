import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiTypescript,
  SiChakraui
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 class="skills-card-img"/>
            <h5 class="skills-card-name">HTML</h5>
          </div>
          <div>
            <DiCss3 class="skills-card-img"/>
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript class="skills-card-img"/>
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div>
            <FaReact class="skills-card-img"/>
            <h5 class="skills-card-name">React</h5>
          </div>
          <div>
            <FaNodeJs class="skills-card-img"/>
            <h5 class="skills-card-name">Nodejs</h5>
          </div>
          <div>
            <DiMongodb class="skills-card-img"/>
            <h5 class="skills-card-name">MongoDb</h5>
          </div>

          <div>
            <SiExpress class="skills-card-img"/>
            <h5 class="skills-card-name">Express</h5>
          </div>

          <div>
            <SiTypescript class="skills-card-img"/>
            <h5 class="skills-card-name">Typescript</h5>
          </div>
          <div>
            <SiChakraui class="skills-card-img"/>
            <h5 class="skills-card-name">Chakra UI</h5>
          </div>
          {/* <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div> */}
          <div>
            <SiNetlify class="skills-card-img"/>
            <h5 class="skills-card-name">Netlify</h5>
          </div>
          <div>
            <VscGithub class="skills-card-img"/>
            <h5 class="skills-card-name">Github</h5>
          </div>
          <div>
            <SiVercel class="skills-card-img"/>
            <h5 class="skills-card-name">Vercel</h5>
          </div>
        </div>
      </div>
    </>
  );
};
