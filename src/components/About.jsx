import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import aboutBackground from '../assets/About.svg';
import aboutProfil from '../assets/About.webp';

const AboutSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-top: -49vh;
  z-index: 2;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: -58vh; 
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${aboutBackground});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  transform: skew(0deg, -12deg);
  z-index: 1;
  max-width: 1370px;
  min-width: 1370px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  min-width: 1050px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25vh 5rem 0; 
  z-index: 3;
  position: relative;
  @media (max-width: 1050px) {
    min-width: 100%;
    padding: 25vh 2rem 0;
  }
  @media (max-width: 675px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  perspective: 1000px; 
`;

const ImageWrapper = styled.div`
  transform: ${props => props.isSmallScreen ? props.transform : 'rotate(-10deg)'};
  transition: transform 0.3s ease;
  
  @media (min-width: 676px) {
    &:hover {
      transform: rotate(-25deg);
    }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  display: block;
  @media (max-width: 675px) {
    max-width: 335px;
    margin-top: -1rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  color: white;
  @media (max-width: 675px) {
    text-align: end;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FF4A57;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #000;
  @media (max-width: 675px) {
    margin-bottom: 1rem;
    color: #FF4A57;
    font-weight: bold;
    font-size: 20px;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #000C24;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #E6323F;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.8rem;
  z-index: 2;
`;

const About = () => {
  const [transform, setTransform] = useState('rotateY(0deg)');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 675);
    };

    const handleScroll = () => {
      if (window.innerWidth <= 675) {
        const scrollPosition = window.scrollY;
        const imagePosition = imageRef.current.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        
        const pivotAmount = ((scrollPosition + windowHeight / 2 - imagePosition) / windowHeight) * 45;
        setTransform(`rotateY(${pivotAmount}deg)`);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AboutSection id="about">
      <BackgroundImage />
      <ContentWrapper>
        <ImageContainer>
          <ImageWrapper isSmallScreen={isSmallScreen} transform={transform} ref={imageRef}>
            <ProfileImage src={aboutProfil} alt="Profile" />
          </ImageWrapper>
        </ImageContainer>
        <TextContainer>
          <Title>About Me</Title>
          <Description>
            An inquisitive Computer Science Engineering student, skilled in leadership, seeking to
            leverage solid development skills with focus on collaboration, communication and passion.
          </Description>
          <DownloadButton href="/path-to-your-cv.pdf" download>
            Download CV
          </DownloadButton>
        </TextContainer>
      </ContentWrapper>
      <ScrollIndicator>Scroll</ScrollIndicator>
    </AboutSection>
  );
};

export default About;