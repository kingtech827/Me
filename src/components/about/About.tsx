import React from "react";
import style from "./about.module.css";
import { Row, Col } from "react-bootstrap";
import { SectionContainer } from "../section/SectionContainer";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiPhp,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiPython
} from "react-icons/si";
export const About = () => {
  return (
    <SectionContainer id="about" title="About Me" count="02">
      <Row>
        <Col md={6} sm={12} className="mb-lg-0 mb-4">
          <div className={style.profile_wrapper} >
            <img src="/media/images/pic.png" className={style.profile_pic}  style={{borderRadius: '50%' , width: '80%'}} />
          </div>
        </Col>
        <Col md={6} sm={12} className="mt-lg-0 mt-4">
          <h2 className={style.subtitle}>Pavlo Chohlo</h2>
          <p className={style.description}>
            Hi! My name is Pavlo Chohlo and I am a Senior Full Stack Developer from Salvador
            city in Ukraine.
            <br/>
             I am passionate about building innovative, high-performance solutions. 
            My expertise spans full-stack development, enabling me to deliver seamless applications from front-end user interfaces to back-end systems, ensuring robust and scalable solutions for every project.
            <br/>
            Throughout my career, I have contributed to complex enterprise systems, e-commerce platforms, and interactive data visualization tools. 
            <br/>My background in full-stack development allows me to handle challenges from ideation to production, ensuring both user experience and technical requirements are met with precision.

          </p>
          
          <p className={style.description}>
            My technical Skills: 
          </p>
          <ul className={style.list}>
            <li className={style.list_item}>
              <SiJavascript fontSize={18} className="ms-0 mx-1" /> JavaScript
              (ES6+)
            </li>
            <li className={style.list_item}>
              <SiTypescript fontSize={18} className="ms-0 mx-1" /> Typescript
            </li>
            <li className={style.list_item}>
              <SiDjango fontSize={18} className="ms-0 mx-1" /> Django REST
            </li>
            <li className={style.list_item}>
              <SiReact fontSize={18} className="ms-0 mx-1" /> React
            </li>
            <li className={style.list_item}>
              <SiNodedotjs fontSize={18} className="ms-0 mx-1" /> Node.js ...
            </li>
            <li className={style.list_item}>
              <SiPython fontSize={18} className="ms-0 mx-1" /> Python
              
            </li>
            <li className={style.list_item}>
              <SiPhp fontSize={18} className="ms-0 mx-1" /> Php
              
            </li>
            <li className={style.list_item}>
              <SiExpress fontSize={18} className="ms-0 mx-1" /> Express.js
              
            </li>
            <li className={style.list_item}>
              <SiMongodb fontSize={18} className="ms-0 mx-1" /> MongoDB
              
            </li>
            <li className={style.list_item}>
              <SiAngular fontSize={18} className="ms-0 mx-1" /> Angular...
              
            </li>
          </ul>

          <div className="d-flex align-items-center mt-4 flex-wrap">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.about_link + " mx-3 ms-0 small"}
            >
              {/* <RiExternalLinkFill fontSize={28} /> &nbsp; Resume */}
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.about_link + " small"}
            >
              {/* <RiGithubFill fontSize={28} /> &nbsp;PavloGithub */}
            </a>
          </div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
