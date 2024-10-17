import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderHero from './components/HeaderHero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: white;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #020B17;
  color: white;
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <HeaderHero />
        <MainContent>
          <About />
          <Skills />
          <Works />
          <Contact />
        </MainContent>
        <Footer>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Footer>
      </AppWrapper>
    </>
  );
}

export default App;