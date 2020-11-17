import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPractice from "./components/MainPractice";
import MainRace from "./components/MainRace";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.primary};
  }
`;

const App = () => (
  <div>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <MainPractice />
      <Footer />
    </ThemeProvider>
  </div>
);

export default App;
