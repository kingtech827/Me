import React from "react";
import style from "./hero.module.css";
// import FadeIn from "react-fade-in";

import { Link } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";

export const Hero = () => {
  return (
    <div className={style.hero} id="home">
      <div className={"content " + style.hero_content}>
        <Row className="py-4 ">
          <Col md={6} className=" align-items-center">
            <div>
              <p className={style.highlight + " mb-0 fw-bold"}>
                Hi, I am Pavlo Chohlo.
              </p>
              <h1 className={style.title}>
                I&apos;m a
                <span className={style.highlight}> Senior Software Engineer</span> from
                Ukraine.
              </h1>
              <p className={style.description}>
                As a skilled Software Engineer, I excel in full-stack development, delivering seamless and scalable solutions that meet both user experience and technical requirements. With expertise in complex enterprise systems, e-commerce platforms, and data visualization tools, I effectively handle projects from ideation to production.
              </p>
              <div
                className={
                  "d-flex flex-sm-row flex-column align-items-start align-items-sm-center " +
                  style.btn_group
                }
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={"text-center " + style.btn_primary}
                >
                  Get In Touch
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={"my-3 " + style.btn_line}
                >
                  Learn More &nbsp;
                  <CgArrowLongRight fontSize={36} />
                </Link>
              </div>
              </div>
          </Col>
          <Col
            md={6}
            className={
              style.hero_img_wrapper +
              " d-flex align-items-center justify-content-center"
            }
          >
            <div>
              <img src="/media/images/hero.png" className={style.hero_img} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
