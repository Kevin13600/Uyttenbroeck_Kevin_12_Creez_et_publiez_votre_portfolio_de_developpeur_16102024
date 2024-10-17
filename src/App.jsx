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
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;