import React from 'react';

const ContentWave = ({header, subheader}) => {
  return (
    <>
      <div className="pageTitle">
        <h1>{header}</h1>
        <h2>{subheader}</h2>
      </div>
    </>
  );
};
export default ContentWave;
