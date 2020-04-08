import React, { useState } from "react";

import ContentWave from "./../components/page-title";

const minMessageCount = 15;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [subjectError, setSubjectError] = useState(true);
  const [messageError, setMessageError] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [count, setCount] = useState(minMessageCount);

  let handleChange = input => {
    let name = input.target.name;
    let value = input.target.value;
    let namePattern = /^[a-zA-ZæøåÆØÅ -]+$/;
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let subjectPattern = /^(.{1,})$/;
    let messagePattern = /^(.{15,})$/;

    switch (name) {
      case "name":
        namePattern.test(value) ? setNameError(false) : setNameError(true);
        setName(value);
        break;
      case "email":
        emailPattern.test(value) ? setEmailError(false) : setEmailError(true);
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "subject":
        subjectPattern.test(value)
          ? setSubjectError(false)
          : setSubjectError(true);
        setSubject(value);
        break;
      case "message":
        setCount(minMessageCount - value.length);
        setMessageError(!messagePattern.test(value));
        setMessage(value);
        break;
      default:
        break;
    }
  };

  let submitForm = event => {
    event.preventDefault();
    setShowResponse(true);
    let body = `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`;
    window.open(`mailto:selmawaller@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <>
      <ContentWave
        header={"contact"}
        subheader={"feel free to contact me at anytime"}
      />
      <div className="content">
        <div className="title">
          <h2>Contact</h2>
        </div>
        <div className="contact">
          <form onSubmit={submitForm}>
            <div className={showResponse ? "disableForm" : ""}>
              <p>
                <label htmlFor="name">
                  Name<span className="required">* </span>
                  <span className={nameError ? "error" : "error__hide"}>
                    {" "}
                    Please enter your name
                  </span>
                </label>
              </p>
              <input
                autoFocus
                onChange={handleChange}
                id="name"
                type="text"
                name="name"
                readOnly={showResponse ? true : false}
              />

              <p>
                <label htmlFor="email">
                  Email<span className="required">* </span>
                  <span className={emailError ? "error" : "error__hide"}>
                    {" "}
                    Please enter a valid email address
                  </span>
                </label>
              </p>
              <input
                onChange={handleChange}
                id="email"
                type="text"
                name="email"
                readOnly={showResponse ? true : false}
              />

              <p>
                <label htmlFor="phone">Phone</label>
              </p>
              <input
                onChange={handleChange}
                id="phone"
                type="text"
                name="phone"
                readOnly={showResponse ? true : false}
              />

              <p>
                <label htmlFor="subject">
                  Subject<span className="required">* </span>
                  <span className={subjectError ? "error" : "error__hide"}>
                    {" "}
                    Subject can't be empty
                  </span>
                </label>
              </p>
              <input
                onChange={handleChange}
                id="subject"
                type="text"
                name="subject"
                readOnly={showResponse ? true : false}
              />

              <p>
                <label htmlFor="message">
                  Message<span className="required">* </span>
                  <span className={messageError ? "error" : "error__hide"}>
                    {" "}
                    Requires {count} more characters
                  </span>
                </label>
              </p>
              <textarea
                onChange={handleChange}
                id="message"
                type="text"
                name="message"
                readOnly={showResponse ? true : false}
              />
            </div>

            <div className="submittedForm">
              <button
                className="submitButton"
                type="submit"
                disabled={
                  nameError ||
                  emailError ||
                  subjectError ||
                  messageError ||
                  showResponse
                }
              >
                <span>Send in email client</span>
              </button>
              <div
                className={showResponse ? "messageSent" : "messageSent__hide"}
              >
                <input
                  readOnly
                  type="text"
                  value="Please wait for client to open"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
