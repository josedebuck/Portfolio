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
          <Image
            src="/portfolio1.jpg" alt="Imagen de mi"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Jose Debuck</strong> and I am a full stack web developer based in Argentina. I graduated from NUCBA Coding Institute where I received my certificate in Full Stack Web Development.

Currently, I am studying Computer Engineering at National University of the Litoral. In my studies and career, I have focused on modern web technologies and frameworks. Some of my technical skills and expertise include MongoDB, Express, React, Node.js, and Prisma.

As a full stack developer, I have worked on several projects including e-commerce websites, landing pages, and marketing sites. In my projects, I implement back-end functionality with Node.js and connect it to front-end interfaces built with React. I also use MongoDB for database management and Prisma for data validation and modeling.

My goal is to continuously learn and improve my skills in new programming languages and technologies. I am passionate about coding and developing engaging user experiences on the web. In my free time, I enjoy reading tech blogs, participating in coding challenges, and contributing to open source projects.

I would love the opportunity to apply my skills and education to help businesses and organizations build powerful and attractive digital presences. Please feel free to contact me if you have any questions or would like to discuss potential collaboration.
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