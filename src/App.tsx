import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPractice from "./components/MainPractice";
import MainRace from "./components/MainRace";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100vh;
    width: 100%;


    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.font.primary};
    font-size: calc(1vw + 1vh + 3px);
  }

  button {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  #root {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {

  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Header />
        <MainPractice />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
