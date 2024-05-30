import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import { TbBrandThreejs, TbBrandNextjs } from "react-icons/tb";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Postman: <SiPostman />,
    HTML: <FaHtml5 />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Bootstrap: <FaBootstrap />,
    Threejs: <TbBrandThreejs />,
    AWS: <FaAws />,
    CSS: <FaCss3Alt />,
    TailwindCss: <SiTailwindcss />,
    NextJS: <TbBrandNextjs />,
    Python: <SiPython />,
    JAVA: <FaJava />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
