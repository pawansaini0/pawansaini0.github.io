import React from "react";
// import { Heading } from '@chakra-ui/react'
import "./github.css"
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename} data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          username="pawansaini0"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
        <div
        style={{ width:"100%", margin: "auto" }}
        className="react-activity-calendar"
      >
        <h3 color={"red.800"}>Github Activity</h3>
        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=pawansaini0"
        />
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=pawansaini0&layout=compact"
        />
        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=pawansaini0&show_icons=true&theme=radical"
        />
      </div>
      </div>
      
    </>
  );
};
