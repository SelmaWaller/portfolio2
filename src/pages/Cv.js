import React from "react";
import ContentWave from "./../components/page-title";
import cv from "./../lib/cv.pdf";

function Cv() {
  return (
    <>
      <ContentWave
        header={"cv"}
        subheader={"pdf available at the bottom of the page"}
      />
      <div className="content">
        <div className="title">
          <h2>Selma Waller</h2>
          <p>Frontend Developer</p>
        </div>
        <div className="resume">
          <div className="cv-container">
            <div className="small-box">
              <p className="title">
                <span>Address</span>
              </p>
              <p>Oslo, 0566, Norway</p>
            </div>
            <div className="small-box">
              <p className="title">
                <span>Phone</span>
              </p>
              <p>+47 941 41 118</p>
            </div>
            <div className="small-box">
              <p className="title">
                <span>Date of birth</span>
              </p>
              <p>Jan 9th, 1995</p>
            </div>
            <div className="small-box">
              <p className="title">
                <span>Nationality</span>
              </p>
              <p>Norwegian</p>
            </div>
            <div className="small-box">
              <p className="title">
                <span>Email</span>
              </p>
              <p>
                <a
                  href="mailto:selmawaller@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  selmawaller@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="section-line"></div>
          <div className="cv-container">
            <div className="medium-box">
              <p className="title">
                <span>Highlighted skills</span>
              </p>
              <p>
                JavaScript - React - Redux - HTML5 - CSS - SASS - Git - Adobe
                packages
              </p>
            </div>
            <div className="medium-box">
              <p className="title">
                <span>Hobbies</span>
              </p>
              <p>
                Frontend, gaming, documentaries, walks, brainteasers and puzzles
              </p>
            </div>
          </div>
          <div className="section-line"></div>
          <div className="large-box">
            <h3 className="title">Profile</h3>
            <p>
              I see myself as an ambivert with a lot of humor, good energy and a
              never-ending thirst for knowledge. My goal right now is to find my
              first job as a junior frontend developer (and hopefully work with
              React), at a place with great people who have a lot to teach me.
            </p>
          </div>
          <div className="section-line"></div>
          <div className="large-box">
            <h3 className="title">Education</h3>
            <p>
              <span>Higher Professional Degree, Noroff</span>{" "}
              <span className="location">Oslo, Norway</span>
            </p>
            <p>Aug 2018 — Jun 2020</p>
            <p className="description">
              A 2 year vocational school with a huge focus on design
              (interaction design, UI, UX, design methods, etc) and
              JavaScript/React. Some skills learned at the school includes
              Redux, HTML5, CSS, SASS, NPM and Git, as well as thorough project
              planning and team work.
            </p>
          </div>
          <div className="section-line"></div>
          <div className="large-box">
            <h3 className="title">Employment history</h3>
            <p>
              <span>Customer Service Specialist, Mr. Green LTD</span>{" "}
              <span className="location">Sliema, Malta</span>
            </p>
            <p>Jul 2017 — Dec 2017</p>
            <p className="description">
              I worked as a CS Specialist for the online betting company Mr.
              Green (and later also their sister company Garbo) over live chat,
              email and phone. Primarily I was working with customers in the EU,
              but also with customers all over the world if needed.
            </p>
            <p>
              My role was to help customers with queries and issues, validate
              personal information for payment withdrawals in cooperation with
              the payments department, and most importantly keep an eye out for
              gambling addiction and make sure that customers played
              responsibly.
            </p>
          </div>

          <div className="large-box previous">
            <p>
              <span>Dental Assistant, Stibor & Waller</span>{" "}
              <span className="location">Kongsberg, Norway</span>
            </p>
            <p>Jul 2014 — Mar 2016</p>
            <p className="description">
              I took calls and booked appointments, cleaned instruments, took
              x-rays, prepared chairs and needed tools etc between patients and
              made sure the clinic was clean.
            </p>
            <p>
              And of course a quick run to the coffee shop every now and then!
            </p>
          </div>
          <div className="section-line"></div>
          <div className="large-box">
            <h3 className="title">References</h3>
            <p>References available upon request</p>
          </div>
          <div className="openPDF">
            <a
              className="button"
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open PDF</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cv;
