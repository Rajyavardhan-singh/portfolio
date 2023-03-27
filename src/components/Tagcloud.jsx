import React from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";

const Tagcloud = ({ parentWidth, textStyle }) => {
  const options = {
    radius: parentWidth / 2,
  };


  return (
    <TagCloud options={options} className={textStyle}>
      {[
        "JavaScript",
        "React",
        "MongoDB",
        "Node",
        "Express",
        "Boostrap",
        "redux Toolkit",
        "Angular",
        "Nextjs",
        "Tailwind",
        "Git",
        "GitHub",
        "HTML5",
        "CSS",
        "Redux",

      ]}
    </TagCloud>
  );
};

export default Tagcloud;
