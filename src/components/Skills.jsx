import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import skillsImage from '../assets/skills-image.webp';
import skillsSvg from '../assets/skills.svg';

const colors = {
  primary: '#FF4A57',
  text: '#333',
  background: '#fff',
};

const SkillsSection = styled.section`
  background-color: ${colors.background};
  padding: 80px 0;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 25vh 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 1200px) {
    text-align: center;
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 4rem;
`;

const Description = styled.p`
  font-size: 2rem;
  color: ${colors.text};
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

const SkillItem = styled.div`
  text-align: center;
`;

const SkillIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: #000C24;
  margin-bottom: 10px;
`;

const SkillName = styled.p`
  font-size: 0.9rem;
  color: ${colors.text};
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillsImage = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    max-width: 80%;
  }

  @media (max-width: 992px) {
    max-width: 70%;
  }

  @media (max-width: 768px) {
    max-width: 60%;
  }
`;

const SkillsSvgBackground = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 115%;
  background: url(${skillsSvg}) no-repeat right center/contain;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const skills = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
];

const Skills = () => (
    <SkillsSection id="skills">
      <Container>
        <ContentWrapper>
          <Title>Compétences</Title>
          <Description>
            J'aime créer des choses qui vivent sur internet,
            que ce soit des sites web, des applications, ou
            tout ce qui se trouve entre les deux.
          </Description>
          <SkillsWrapper>
            {skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon icon={skill.icon} />
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <SkillsImage src={skillsImage} alt="Illustration des compétences" />
        </ImageWrapper>
      </Container>
      <SkillsSvgBackground />
    </SkillsSection>
  );
  
  export default Skills;