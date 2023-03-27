import React from "react";
import BaseText from "../components/BaseText";
import Codefont from "../components/Codefont";
import TagcloudDiv from "../components/TagcloudDiv";
import { arrayToCrash } from "../functions/crashTextFuncs";
import ScrollIndicators from "../components/ScrollIndicators";
import BigbgText from "../components/BigbgText";

const AboutMe = () => {
  const mainText = ["Me, Myself and I"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section
      id="aboutMe"
      className="w-full lg:h-screen py-16 px-1 sm:px-3 md:px-6 lg:px-8 relative flex flex-col justify-center"
    >
      {/* <Codefont text="section" className="absolute top-6 tab-0" /> */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-6/12">
          <Codefont text="h2" className="tab-1" />
          <div className="tab-2">{crashText}</div>
          <Codefont text="/h2" className="tab-1" />

          <Codefont text="p" className="tab-1" />

          <BaseText className="tab-3" style={{ textAlign: "justify" }}>
            <p style={{ textAlign: "justify" }}>
              A young web developer from Indore, India. Have completed B.Tech in
              Electrical Engineering Degree from{" "}
            </p>
            <span style={{ textAlign: "justify" }}>
              <a
                className="text-brandGreen hover:text-emerald-400"
                href="http://www.uecu.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                Gov. Engineering College
              </a>
            </span>{" "}
            ,Ujjain
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              Since May 2022, I have been delving into the world of web
              development, honing my skills and gaining valuable experience. My
              journey has been enriched by the opportunity to work with
              Edureka!, where I have expanded my knowledge by working with
              cutting-edge technologies such as ReactJS, Angular, Nodejs, and
              MongoDb.
            </p>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              When I'm not busy honing my career skills, I enjoy indulging in my
              other passions. Video games, chess, badminton, and table tennis
              are just a few of my favorite pastimes. While I wouldn't
              necessarily label myself as a creative type, I do have a knack for
              solving problems quickly and efficiently, which has served me well
              in both my personal and professional life.
            </p>
          </BaseText>
          <Codefont text="/p" className="tab-1" />
        </div>

        <TagcloudDiv
          className="w-10/12 lg:w-6/12 "
          textStyle="font-semibold text-brandGreen text-base sm:text-2xl md:text-3xl"
        />
      </div>
      <BigbgText
        text="About"
        className="absolute bottom-0 leading-none left-0 md:left-auto md:right-[12%]"
      />
      <ScrollIndicators />
    </section>
  );
};

export default AboutMe;
