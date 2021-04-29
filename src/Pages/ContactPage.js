/** @format */

import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage() {
  const contactFormSchema = Yup.object().shape({
    userName: Yup.string()
      .required("enter your name!")
      .min(3, "too short name"),
    userEmail: Yup.string()
      .email("invalid email!")
      .required("enter your email"),
    message: Yup.string()
      .required("enter your message")
      .min(5, "type a longer message"),
  });

  return (
    <div className="contact">
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          message: "",
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_EMAIL_SERVICE,
              process.env.REACT_APP_EMAIL_TEMPLATE,
              values,
              process.env.REACT_APP_EMAIL_USER
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          resetForm();
        }}
      >
        {({ values }) => (
          <Form className="contact-form">
            <h2>Napisz do mnie</h2>
            <Field
              className="field"
              id="userName"
              name="userName"
              value={values.userName}
              type="text"
              placeholder="Type your name..."
              autoComplete="off"
            />
            <div className="contact-error-msg">
              <ErrorMessage name="userName" />
            </div>

            <Field
              className="field"
              id="userEmail"
              name="userEmail"
              value={values.userEmail}
              type="email"
              autoComplete="off"
              placeholder="Type your email..."
            />
            <div className="contact-error-msg">
              <ErrorMessage name="userEmail" />
            </div>

            <Field
              className="field-textarea"
              id="message"
              name="message"
              placeholder="type your message..."
              component="textarea"
              istextarea="true"
              value={values.message}
            />
            <div className="contact-error-msg">
              <ErrorMessage name="message" />
            </div>

            <button className="submit-btn" type="submit">
              send
            </button>
          </Form>
        )}
      </Formik>
      <footer className="contact-footer">
        <h2>Moje social media</h2>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/adrian-jazowski/"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon in" />
          </a>
          <a
            href="https://github.com/AdrianJazowski"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
