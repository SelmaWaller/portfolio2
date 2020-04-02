import React from 'react';

const ProjectCards = ({
  netlify,
  image,
  name,
  published,
  tools,
  type,
  description,
  gitrepo,
}) => {
  return (
    <>
      <div className="projects">
        <a href={netlify}>
          <img src={image} alt={name} title="Netlify preview" />
        </a>
        <div className="projectDetails">
          <h3>{name}</h3>
          <p>{published}</p>
          <p>{tools}</p>
          <p>{type}</p>
          <p>{description}</p>
          <div className="gitLink">
            <p>
              <a href={gitrepo}>Link to repo</a>
            </p>
            <div className="linkLine"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
