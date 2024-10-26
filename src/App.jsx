import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <>
        <Helmet>
          <title>Kevin Uyttenbroeck | Développeur Front-end React</title>
          <meta name="description" content="Portfolio de développeur web spécialisé en React, découvrez mes projets et réalisations en intégration web et développement front-end." />
          <meta name="keywords" content="développeur web, front-end, react, javascript, portfolio" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/" />
          <meta property="og:title" content="Uyttenbroeck Kevin - Portfolio Développeur Front-end" />
          <meta property="og:description" content="Découvrez mes projets et réalisations en développement web front-end." />
          <meta property="og:image" content="https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/assets/OG.PNG" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/" />
          <meta property="twitter:title" content="Uyttenbroeck Kevin - Portfolio Développeur Front-end" />
          <meta property="twitter:description" content="Découvrez mes projets et réalisations en développement web front-end." />
          <meta property="twitter:image" content="https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/assets/OG.PNG" />

          {/* Autres meta tags importants */}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="theme-color" content="#FF4A57" />
          <meta name="author" content="Kevin Uyttenbroeck" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="canonical" href="https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/" />
          
          {/* Préconnexions pour améliorer les performances */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          {/* Structured Data / Schema.org */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "Uyttenbroeck Kevin",
                "url": "https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/",
                "jobTitle": "Développeur Front-end",
                "description": "Développeur web spécialisé en React et technologies front-end modernes",
                "skills": ["React", "JavaScript", "HTML5", "CSS3", "Sass", "Node.js", "MongoDB"],
                "image": "https://kevin13600.github.io/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/assets/OG.PNG",
                "sameAs": [
                  "https://www.linkedin.com/in/kevin-uyttenbroeck-640934107/",
                  "https://github.com/Kevin13600"
                ]
              }
            `}
          </script>
        </Helmet>
        
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
    </HelmetProvider>
  );
};

export default App;