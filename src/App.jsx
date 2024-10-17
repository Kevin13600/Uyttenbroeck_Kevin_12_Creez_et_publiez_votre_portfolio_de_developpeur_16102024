import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
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
`;

const MainContent = styled.main`
  flex: 1;
`;

const Section = styled(Element)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterSection = styled(Section)`
  min-height: auto; // Le footer n'a pas besoin d'être de hauteur 100vh
`;

class App extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    window.addEventListener('wheel', this.handleWheel, { passive: false });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = ['header', 'about', 'skills', 'works', 'contact', 'footer'];
    const currentIndex = sections.findIndex(section => 
      document.getElementById(section).getBoundingClientRect().top >= 0
    );
    const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
    scroller.scrollTo(sections[nextIndex], {
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Section name="header" id="header"><HeaderHero /></Section>
          <MainContent>
            <Section name="about" id="about"><About /></Section>
            <Section name="skills" id="skills"><Skills /></Section>
            <Section name="works" id="works"><Works /></Section>
            <Section name="contact" id="contact"><Contact /></Section>
          </MainContent>
          <FooterSection name="footer" id="footer"><Footer /></FooterSection>
        </AppWrapper>
      </>
    );
  }
}

export default App;