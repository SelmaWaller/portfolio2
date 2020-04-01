import React, {useState} from 'react';

import ContentWave from './../components/page-title';

const minMessageCount = 15;

export default function Contact() {
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [messageError, setMessageError] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [count, setCount] = useState(minMessageCount);

  let handleChange = input => {
    let name = input.target.name;
    let value = input.target.value;
    let namePattern = /^[a-zA-ZæøåÆØÅ -]{1,}[ ]{1}[a-zA-ZæøåÆØÅ. -]{1,}$/;
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let messagePattern = /^(.{15,})$/;

    switch (name) {
      case 'name':
        namePattern.test(value) ? setNameError(false) : setNameError(true);
        break;
      case 'email':
        emailPattern.test(value) ? setEmailError(false) : setEmailError(true);
        break;
      case 'message':
        setCount(minMessageCount - value.length);
        setMessageError(!messagePattern.test(value));
        break;
      default:
        break;
    }
  };

  let filterPhone = input => {
    input.target.value = input.target.value.replace(/[^\d]/, '');
  };

  let submitForm = event => {
    event.preventDefault();
    setShowResponse(true);
  };

  return (
    <>
      <ContentWave
        header={'contact'}
        subheader={'feel free to contact me at anytime!'}
      />
      <div className="content">
        <div className="title">
          <h2>Contact</h2>
        </div>
        <div className="contact">
          <form onSubmit={submitForm}>
            <div className={showResponse ? 'disableForm' : ''}>
              <p>
                <label htmlFor="name">
                  Name<span className="required">* </span>
                  <span className={nameError ? 'error' : 'error__hide'}>
                    {' '}
                    Please enter your name. Full surname is not required
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
                  <span className={emailError ? 'error' : 'error__hide'}>
                    {' '}
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
                onChange={filterPhone}
                id="phone"
                type="text"
                name="phone"
                readOnly={showResponse ? true : false}
              />

              <p>
                <label htmlFor="message">
                  Message<span className="required">* </span>
                  <span className={messageError ? 'error' : 'error__hide'}>
                    {' '}
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
                  nameError || emailError || messageError || showResponse
                }
              >
                <span>Send</span>
              </button>
              <div
                className={showResponse ? 'messageSent' : 'messageSent__hide'}
              >
                <input
                  readOnly
                  type="text"
                  value="Message sent successfully!"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
