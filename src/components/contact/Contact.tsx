import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import { Row, Col, Form } from "react-bootstrap";
import { FaHome, FaPhone, FaEnvelopeOpen } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { IoWarning } from "react-icons/io5";
import useContact from "./useContact";
export const Contact = () => {
  const { contactValues, handleChange, handleSubmit } = useContact();

  return (
    <div className={style.contact} id="contact">
      <video loop muted autoPlay controls={false} className={style.bg}>
        <source src="/media/videos/bg.mp4" type="video/mp4" />
      </video>
      <main className={"content " + style.contact_content}>
        <h1 className={style.title}>
          <span className={style.highlight + " fs-4"}>06.</span> Contact
        </h1>
        <Row>
          <Col md={6} className={style.contact_left}>
            <div>
              <div className={style.contact_title}>
                <h2 className={style.subtitle + " mb-0"}>Get In Touch!</h2>
                <p className={style.contact_text}>
                  Always excited for new opportunities. Feel free to message me
                  for inquiries, let&apos;s chat. Drop by and say Hi!
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center mb-3">
                  <FaHome fontSize={28} className={style.contact_icon} />
                  <p className={style.contact_info}>Chernihiv , Chernihiv , Ukraine</p>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaEnvelopeOpen
                    fontSize={24}
                    className={style.contact_icon}
                  />
                  <p className={style.contact_info}>pavlochohlo@gmail.com</p>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaPhone fontSize={24} className={style.contact_icon} />
                  <p className={style.contact_info}>+380 96 461 28 74</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label className={style.contact_label}>
                  Full name
                </Form.Label>
                <Form.Control
                  className={style.contact_input}
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  onChange={handleChange}
                  value={contactValues.name}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={style.contact_label}>
                  Email address
                </Form.Label>
                <Form.Control
                  name="email"
                  className={style.contact_input}
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={contactValues.email}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={style.contact_label}>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  className={style.contact_input}
                  placeholder="Enter message"
                  onChange={handleChange}
                  value={contactValues.message}
                  rows={6}
                  required
                />
              </Form.Group>
              <button
                className={style.contact_btn}
                disabled={
                  contactValues.loading || contactValues.status ? true : false
                }
              >
                {contactValues.status === null ? (
                  "Submit"
                ) : contactValues.status === true ? (
                  <div className="d-flex align-items-center justify-content-center">
                    <GoCheck fontSize={21} /> Email Sent Successfully!
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-center">
                    <IoWarning fontSize={21} /> Sorry there was a problem.
                  </div>
                )}
              </button>
            </Form>
          </Col>
        </Row>
        <video className={style.video}>
          <source src="/media/videos/bg.m4v" type="video/mp4" />
        </video>
      </main>
    </div>
  );
};
