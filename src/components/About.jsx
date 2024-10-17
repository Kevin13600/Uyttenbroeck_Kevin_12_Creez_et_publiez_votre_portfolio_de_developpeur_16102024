import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #020B17;
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  color: white;
  max-width: 50%;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const SplashEffect = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  background-image: url('/path-to-your-splash-image.svg');
  background-size: cover;
  z-index: -1;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <ContentWrapper>
        <TextContent>
          <Title>About Me</Title>
          <Description>
            I am a passionate Full Stack Developer with experience in creating visually appealing and functional web applications. My expertise includes both front-end and back-end technologies.
          </Description>
        </TextContent>
        <ImageWrapper>
          <ProfileImage src="/path-to-your-profile-image.jpg" alt="Profile" />
          <SplashEffect />
        </ImageWrapper>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;