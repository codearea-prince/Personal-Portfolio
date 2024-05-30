import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
// import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Prince Kumar</h4>
      <h4>Copyright &copy; 2024 PK</h4>
      <div className="footerLinks">
        <a href="https://github.com/codearea-prince" target="">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/prince-kumar-ba1526202/" target="">
          <FaLinkedin />
        </a>
        <a href="mailTo:princekumar87090@gmail.com" target="">
          <GrMail />
        </a>
        {/* <a href="https://leetcode.com/sahni1403/" target="">
          <SiLeetcode />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
