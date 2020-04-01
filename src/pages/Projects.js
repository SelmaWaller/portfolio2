import React from 'react';
import ContentWave from '../components/page-title';
import ProjectObjects from './../lib/project-objects';
import ProjectCards from './../components/project-cards';

function Projects() {
  return (
    <>
      <ContentWave
        header={'hi, there!'}
        subheader={"i'm selma. welcome to my portfolio"}
      />
      <div className="content">
        <div className="title">
          <h2>Projects</h2>
        </div>
        {ProjectObjects.map((value, index) => {
          return (
            <ProjectCards
              key={index}
              gitrepo={value.gitrepo}
              image={value.image}
              name={value.name}
              published={value.published}
              tools={value.tools}
              type={value.type}
              description={value.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
