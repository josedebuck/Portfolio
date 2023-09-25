import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src="/portfolio1.jpg" alt="Imagen de mi" />
          <div className="AboutBio">
            Hello! My name is <strong>Jose Debuck</strong> and I am a full stack
            web developer from Argentina, I graduated from NUCBA Coding
            Institute with a focus on modern technologies like MongoDB, Express,
            React, Node.js and Prisma. Currently studying Computer Engineering,
            I have experience building e-commerce sites, marketing pages and
            more. Combining backend development in Node.js with React frontend
            interfaces is my specialty. MongoDB and Prisma help manage data. I'm
            passionate about coding and creating engaging user experiences.
            Constantly learning new skills, I enjoy tech communities and open
            source contributions. Hoping to apply my education helping
            businesses succeed online. Contact me to discuss project
            opportunities.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
