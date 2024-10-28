import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerBackground from '../assets/Footer2.svg';

const FooterWrapper = styled.footer`
  background-color: #020B17;
  color: white;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 10% auto; // 
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FF4A57;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialIcons>
          <SocialIcon href="https://x.com/LUkuleliste" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon href="https://github.com/Kevin13600" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/kevin-uyttenbroeck-640934107/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/kevinuytten/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
        </SocialIcons>
        <Copyright>
          © {new Date().getFullYear()} Kevin Uyttenbroeck
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;