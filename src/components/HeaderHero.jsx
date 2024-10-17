import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import heroBackground from '../assets/hero.svg';
import vectorImage from '../assets/Vector.svg';

const HeaderHeroWrapper = styled.div`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: right center;
  width: 100%;
  min-width: 1050px;
  max-width: 1340px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const VectorBackground = styled.div`
  position: absolute;
  top: 6px;
  left: 53px;
  width: 190px;
  height: 200px;
  background-image: url(${vectorImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  z-index: 1;

  @media (max-width: 1111px) {
  top : -36px;
  left: -40px;
  }
`;

const HeaderWrapper = styled.header`
  padding: 2rem 5rem;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 1111px) {
  padding: 2rem 2rem;;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;

  @media (max-width: 1111px) {
  gap: 2rem;
  }

  @media (max-width: 410px) {
  gap: 1rem;
  }
  `;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #FF4A57;
  }
`;

const HomeLink = styled(NavLink)`
  color: #FF4A57;
  position: relative;
  z-index: 1000;
  font-weight: bold;
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
  padding-bottom: 20rem;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3.5rem;
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  &:hover {
    color: #FF4A57;
  }
`;

const HeaderHero = () => {
    return (
      <HeaderHeroWrapper>
        <VectorBackground />
        <HeaderWrapper>
          <Nav>
            <HomeLink>Home</HomeLink>  
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#works">Works</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
      </HeaderWrapper>
      <HeroContent>
        <HeroTitle>Kevin</HeroTitle>
        <HeroSubtitle>Front-end Developer</HeroSubtitle>
        <SocialIcons>
          <SocialIcon href="https://github.com/Kevin13600" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon href="https://github.com/Kevin13600" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/kevin-uyttenbroeck-640934107/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/kevinuytten/" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
    </HeaderHeroWrapper>
  );
};

export default HeaderHero;