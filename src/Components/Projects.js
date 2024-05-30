import React from "react";
import ProjectBox from "./ProjectBox";
import ChatApp from "../images/chatapp.png";
import Hospital from "../images/hospital.png";
import OpenAi from "../images/OpenAi.png";
import Shoppers from "../images/Ecommerce.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={ChatApp} projectName="Chatting_App" />
        <ProjectBox projectPhoto={Hospital} projectName="Hospital_Management_System" />
        <ProjectBox projectPhoto={Shoppers} projectName="StyleSpot" />
        <ProjectBox projectPhoto={OpenAi} projectName="Article_Summarizer" />

      </div>
    </div>
  );
};

export default Projects;
