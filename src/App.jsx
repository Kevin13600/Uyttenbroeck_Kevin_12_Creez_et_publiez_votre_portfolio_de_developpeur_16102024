import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderHero from './components/HeaderHero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const FooterSection = styled(Section)`
  min-height: auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <header role="banner">
          <Section id="header" aria-label="En-tête">
            <HeaderHero />
          </Section>
        </header>
        
        <MainContent role="main">
          <Section id="about" aria-label="À propos">
            <About />
          </Section>
          <Section id="skills" aria-label="Compétences">
            <Skills />
          </Section>
          <Section id="works" aria-label="Projets">
            <Works />
          </Section>
          <Section id="contact" aria-label="Contact">
            <Contact />
          </Section>
        </MainContent>
        
        <FooterSection id="footer" role="contentinfo">
          <Footer />
        </FooterSection>
      </AppWrapper>
    </>
  );
};

export default App;