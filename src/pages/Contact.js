import React, {useState, useEffect} from 'react';
import ContentWave from './../components/page-title';

function Contact() {
  const [nameError, setNameError] = useState(true);

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
          <form>
            <p>
              <label htmlFor="name">
                Name*
                <span className={nameError ? 'nameError' : 'nameError__hide'}>
                  Please enter your full name
                </span>
              </label>
            </p>
            <input id="name" />

            <p>
              <label htmlFor="email">
                Email*<span>Please enter a valid email address</span>
              </label>
            </p>
            <input id="email" />

            <p>
              <label htmlFor="phone">Phone</label>
            </p>
            <input id="phone" />
            <p>
              <label htmlFor="message">
                Message*<span>Requires 20 more characters</span>
              </label>
            </p>
            <textarea id="message"></textarea>
            <button className="submitButton">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
