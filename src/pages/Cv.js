import React from "react";
import ContentWave from "./../components/page-title";

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
        <div className="resume"></div>
      </div>
    </>
  );
}

export default Cv;
