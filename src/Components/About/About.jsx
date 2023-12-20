import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" id="user-detail-name">
          Hi, I am <span className="about__name">Pawan Saini</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right" id="user-detail-intro">
          A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/pawansaini0"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:sainipawann0@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918700667401"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pawan-saini-1b1a71175/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://drive.google.com/file/d/11Jr_dcB47Li27-yCYht0Cq0BNXMQo3cJ/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a> */}
          {/* <a
            href="https://www.facebook.com/imbickydutta"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://goo.gl/maps/QyNYmATTCdkq1Af69"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a> */}
        </div>
      </div>
      <Introduction />
      {/* <Timeline /> */}
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
