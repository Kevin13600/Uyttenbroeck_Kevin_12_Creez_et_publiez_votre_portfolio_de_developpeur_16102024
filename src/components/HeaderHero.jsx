import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import heroBackground from '../assets/hero.svg';
import vectorImage from '../assets/Vector.svg';

const HeaderHeroWrapper = styled.div`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: right center;
  width: 1700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const VectorBackground = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  top: -36px;
  left: -40px;
  background-image: url(${vectorImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  z-index: 1;

  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
  }
`;

const HeaderWrapper = styled.header`
  padding: 2rem 5rem;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 1111px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;

  @media (max-width: 865px) {
    gap: 4rem;
  }

  @media (max-width: 740px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
  }
`;

const NavLink = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #FF4A57;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media (max-width: 740px) {
    font-size: 1rem;
  }
`;

const HomeLink = styled(NavLink)`
  color: #FF4A57;
  position: relative;
  z-index: 1000;
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
  padding-bottom: 20rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-bottom: 10rem;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
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

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }
`;

const HeaderHero = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <HeaderHeroWrapper>
      <VectorBackground />
      <HeaderWrapper>
        <MenuIcon onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle menu">
          <FontAwesomeIcon icon={faBars} />
        </MenuIcon>
        <Nav $isOpen={isNavOpen}>
          <HomeLink onClick={handleNavLinkClick}>Accueil</HomeLink>  
          <NavLink href="#about" onClick={handleNavLinkClick}>À propos</NavLink>
          <NavLink href="#skills" onClick={handleNavLinkClick}>Compétences</NavLink>
          <NavLink href="#works" onClick={handleNavLinkClick}>Projets</NavLink>
          <NavLink href="#contact" onClick={handleNavLinkClick}>Contact</NavLink>
        </Nav>
      </HeaderWrapper>
      <HeroContent>
        <HeroTitle>Kevin</HeroTitle>
        <HeroSubtitle>Développeur Intégrateur Web</HeroSubtitle>
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