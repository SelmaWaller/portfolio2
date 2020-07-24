import React from "react";

import linkedin from "./../images/linkedin.png";
import email from "./../images/email.svg";
import github from "./../images/git.png";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/selmawaller/" target="blank">
        <img src={linkedin} alt="linkedin" title="LinkedIn" />
      </a>
      <a href="mailto:selmawaller@gmail.com">
        <img src={email} alt="email" title="Send me an email" />
      </a>
      <a href="https://github.com/SelmaWaller" target="blank">
        <img src={github} alt="github" title="Github" />
      </a>
      <p>2020 © selma waller</p>
    </div>
  );
};

export default Footer;
