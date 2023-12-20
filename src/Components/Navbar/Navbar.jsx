import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import resume from "../../images/resume.pdf";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  function redirect() {
    window.open(
      "https://drive.google.com/file/d/1ZyNFUIwwFuHrUI3EU1lmznEnlqcLWeqR/view?usp=sharing",
      "_blank",
      "noreferrer"
    );
  }
  return (
    <>
      <nav className="center nav" id="nav-menu">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              id="home"
              href="#home"
              title= "Home" class= "nav-link home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              id="about"
              // class="about section"
              href="#about"
              title= "About" class= "nav-link about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              id="skills"
              href="#skills"
              title= "Skill" class= "nav-link skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              id="projects"
              href="#projects"
              title= "Project" class= "nav-link projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              id="contact"
              href="#contact"
              title= "Contact" class= "nav-link contact" 
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a  id="resume-link-1"
              href={resume}
              // href="https://drive.google.com/file/d/11Jr_dcB47Li27-yCYht0Cq0BNXMQo3cJ/view?usp=sharing"
              onClick={redirect}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
              download="Pawan-Saini.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
