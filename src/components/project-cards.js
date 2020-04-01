import React from 'react';

const ProjectCards = ({
  gitrepo,
  image,
  name,
  published,
  tools,
  type,
  description,
}) => {
  return (
    <>
      <div className="projects">
        <a href={gitrepo}>
          <img src={image} alt={name} title="Inspect repo in github" />
        </a>
        <div className="projectDetails">
          <h3>{name}</h3>
          <p>{published}</p>
          <p>{tools}</p>
          <p>{type}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
