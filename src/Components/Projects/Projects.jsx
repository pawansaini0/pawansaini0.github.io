import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project project-card">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/98752820/230616358-61548aea-5b19-4842-b11e-b2bea0dc5190.png"
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Soundarya</h2>
              <p class="project-description">
                Clone of the popular email campaigning app Mail Chimp. Built on
                react for front end and nodeJS on backend. It's a team project
                completed executed in 5 days.
              </p>
              <div class="project-tech-stack">
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  class="project-deployed-link"
                  href="https://soundaryaa.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  class="project-github-link"
                  href="https://github.com/Ajay84sia/Soundarya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project project-card">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/112754696/241769127-730c435f-700d-4b48-9c83-9a1e1d9dee74.png"
                  alt="Myntra"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">1800flowers Clone</h2>
              <p class="project-description">
                First Backend Project with NodeJS, ExpressJS and MongoDB. Used
                EJS to render views. Main functionalities were : Register/Login
                using JWT, Sorting and Filtering in the backend, Cart and Wish
                List and many more.
              </p>
              <div class="project-tech-stack">
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a class="project-deployed-link"
                  href="https://beauty-smell.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a class="project-github-link"
                  href="https://github.com/pawansaini0/aware-carriage-7836"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project project-card">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/112754696/241779904-5fce3574-83b4-4f78-bdde-d0e4b84bae59.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Zara Clone </h2>
              <p class="project-description">
                Backend API for a google drive like app built using NodeJS,
                Express, Mongoose, MongoDB Atlas and AWS S3 for storage. A solo
                project. CRUD operations for users, files and folders.
              </p>
              <div class="project-tech-stack">
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a class="project-deployed-link"
                  href="https://helpful-begonia-adf8e6.netlify.app/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a class="project-github-link"
                  href="https://github.com/pawansaini0/bewildered-moon-2417"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project project-card">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/112754696/241780529-38d09d62-d6ff-4acf-8cc2-24478805c1ce.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Myntra clone</h2>
              <p class="project-description">
                Mini project of A classic TicTacToe game built using ReactJS.
                Features : Button for Resetting The Game, History of all the
                moves played (undo a move), etc.
              </p>
              <div class="project-tech-stack">
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a class="project-deployed-link"
                  href="https://effortless-pasca-3465fc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a class="project-github-link"
                  href="https://github.com/Tathagat017/Manyata_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="projects_container">
          <div className="project project-card">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/PMny3hW/Screenshot-406.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Star Wars Search</h2>
              <p class="project-description">
                Vanilla JS web app to Search for any Star Wars Character. Build
                with the help of Star Wars API and has the Classic UI (Color
                theme) of the original Star Wars Movie. Built to learn APIs and
                use them in the project.
              </p>
              <div class="project-tech-stack">
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a class="project-deployed-link"
                  href="https://searchstarwars.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a class="project-github-link"
                  href="https://github.com/imbickydutta/starWarsCharacterSearch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
