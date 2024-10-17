import React from 'react';
import styled from 'styled-components';
import contactBg from '../assets/contact.svg';

const ContactSection = styled.section`
  background-image: url(${contactBg});
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 30px;
`;

const MailtoLink = styled.a`
  display: inline-block;
  background-color: #FF4A57;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E6323F;
  }
`;

const Contact = () => {
  const email = "k.uyttenbroeck@gmail.com";
  const subject = encodeURIComponent("Contact from Portfolio");
  const body = encodeURIComponent("Dear [Your Name],\n\nI'd like to get in touch with you regarding...");

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title>Get in Touch</Title>
        <Subtitle>Drop me a line. I would like to hear from you.</Subtitle>
        <MailtoLink href={`mailto:${email}?subject=${subject}&body=${body}`}>
          Send me an email
        </MailtoLink>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;