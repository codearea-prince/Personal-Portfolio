import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Chatting_AppDesc:
      "A real-time chatting application using the MERN stack, allowing users to engage in instant messaging with one another.",
    Chatting_AppGithub: "https://github.com/codearea-prince/MERN-Chatting-Application",
    Chatting_AppWebsite: "https://mern-chatting-application-1.onrender.com",

    Hospital_Management_SystemDesc:
      "A Comprehensive hospital management system using MERN stack. Implemented appointment booking functionality with healthcare providers based on availability and speciality.",
      Hospital_Management_SystemGithub: "https://github.com/codearea-prince/Hospital_Management_System",
      Hospital_Management_SystemWebsite: "https://zeecare-com.netlify.app",

    Article_SummarizerDesc:
      "A content summarizer website using API, allows users to input links of articles and web pages, extract the concise summaries from the articles and web pages.",
      Article_SummarizerGithub: "https://github.com/codearea-prince/AI-Article-Summarizer",
      Article_SummarizerWebsite: "https://aicontentsummarizer.netlify.app",

    StyleSpotDesc:
      "An Ecommerce website utilizing a diverse stack of technologies including React, Tailwind CSS, Bootstrap, React-dom, React-icons and many others. Skilled in implementing login and logout functionality to ensure secure access for users.",
      StyleSpotGithub: "https://github.com/codearea-prince/StyleSpot-Ecommerce-Website",
      StyleSpotWebsite: "https://stylespot.netlify.app",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target=""
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
