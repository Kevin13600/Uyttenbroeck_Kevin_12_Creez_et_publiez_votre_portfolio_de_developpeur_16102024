import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
`;

const SkillItem = styled.div`
  text-align: center;
`;

const SkillCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #FF4A57;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

const SkillName = styled.p`
  color: white;
  font-size: 16px;
`;

const Skills = () => {
  const skillsData = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'Node.js', level: '70%' },
    { name: 'Python', level: '65%' },
  ];

  return (
    <SkillsSection id="skills">
      <ContentWrapper>
        <Title>Skills</Title>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillItem key={index}>
              <SkillCircle>{skill.level}</SkillCircle>
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsSection>
  );
};

export default Skills;