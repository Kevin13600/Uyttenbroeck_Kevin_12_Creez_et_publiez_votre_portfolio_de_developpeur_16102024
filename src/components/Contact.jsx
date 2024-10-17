import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #020B17;
  padding: 50px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: white;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0A1927;
  color: white;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0A1927;
  color: white;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #FF4A57;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E6323F;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactSection id="contact">
      <ContentWrapper>
        <Title>Drop me a line</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact;