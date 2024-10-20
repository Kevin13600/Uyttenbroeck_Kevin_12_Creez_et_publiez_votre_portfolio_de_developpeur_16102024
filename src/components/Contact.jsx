import React from 'react';
import styled from 'styled-components';
import contactBg from '../assets/contact.svg';

const ContactSection = styled.section`
  background-image: url(${contactBg});
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Title = styled.h2`
  color: #FF4A57;
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MailtoLink = styled.a`
  display: inline-block;
  background-color: #FF4A57;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(255, 74, 87, 0.2);

  &:hover {
    background-color: #E6323F;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255, 74, 87, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const Contact = () => {
  const email = "k.uyttenbroeck@gmail.com";
  const subject = encodeURIComponent("Contact depuis le Portfolio");
  const body = encodeURIComponent("Bonjour Kevin,\n\nJ'aimerais prendre contact avec vous concernant...");

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title>Contactez-moi</Title>
        <Subtitle>
          Vous avez un projet intéressant ou une opportunité à discuter ? 
          N'hésitez pas à m'envoyer un message. Je suis toujours ouvert à de nouvelles collaborations !
        </Subtitle>
        <MailtoLink href={`mailto:${email}?subject=${subject}&body=${body}`}>
          M'envoyer un email
        </MailtoLink>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;