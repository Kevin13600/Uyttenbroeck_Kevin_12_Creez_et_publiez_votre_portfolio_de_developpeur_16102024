import React from 'react';
import styled from 'styled-components';

const WorksSection = styled.section`
  background-color: #020B17;
  padding: 50px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: white;
  font-size: 36px;
  margin-bottom: 30px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background-color: #0A1927;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #B0B0B0;
  font-size: 16px;
`;

const Works = () => {
  const projectsData = [
    { title: 'Project 1', description: 'A brief description of project 1', image: '/path-to-image1.jpg' },
    { title: 'Project 2', description: 'A brief description of project 2', image: '/path-to-image2.jpg' },
    { title: 'Project 3', description: 'A brief description of project 3', image: '/path-to-image3.jpg' },
  ];

  return (
    <WorksSection id="works">
      <ContentWrapper>
        <Title>Works</Title>
        <ProjectGrid>
          {projectsData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </WorksSection>
  );
};

export default Works;