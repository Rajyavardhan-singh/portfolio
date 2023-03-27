import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Profilelinks = () => {
  return (
    <ul className="flex justify-center text-neutral-500 text-xl  lg:h-44 h-14">
      <a href="https://github.com/Rajyavardhan-singh" target="_blank" rel="noreferrer">
        <AiFillGithub className="mx-1 hover:text-brandGreen" />
      </a>
      <a href="/"  rel="noreferrer">
        <AiFillLinkedin className="mx-1 hover:text-brandGreen" />
      </a>
      <a href="mailTo:rajyavardhansr@gmail.com">
        <AiFillMail className="mx-1 hover:text-brandGreen" />
      </a>
    </ul>
  );
};

export default Profilelinks;
