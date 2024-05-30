import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import newOne from "../images/newOne.jpg";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hello, I'm <b>Prince Kumar</b>, a <b>BTech CSE </b> third-year
            student and a passionate developer. As a <b>MERN Stack Developer</b>{" "}
            and a <b>software developer</b>, I specialize in creating dynamic
            and user-friendly web applications.
            <br />
            <br />
            Even as a fresher, I have a solid foundation in full-stack
            development and a strong drive to learn and innovate.
            <br />
            <br />
            I love to create original projects with beautiful designs, you can
            check out some of my work in the projects section.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            My <b>Journey</b>
          </h1>
          <p>
            My journey in the tech world began with a curiosity for how things
            work and a desire to build solutions that make a difference.
            <br />
            Starting with a deep curiosity for technology, I've dedicated myself
            to mastering the <b>MERN</b> stack — <b>MongoDB</b>,{" "}
            <b>Express.js</b>,<b> React</b>, <b>Node.js</b>.
            <br />
            <br />
            This comprehensive skill set enables me to handle both the{" "}
            <b>frontend</b> and <b>backend</b> of web applications, ensuring
            seamless integration and optimal performance.
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>
        <Tilt>
          <img className="Avatar2" src={newOne} alt="" />
        </Tilt>
      </div>

      <h1 className="SkillsHeading">
        Professional <b>Skillset</b>
      </h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="TailwindCss" />
        <Skills skill="Bootstrap" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Npm" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Threejs" />
        <Skills skill="Postman" />
        <Skills skill="NextJS" />
        <Skills skill="AWS" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="JAVA" />
      </div>
    </>
  );
};

export default About;
