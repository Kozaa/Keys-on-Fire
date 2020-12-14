import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPractice from "./components/MainPractice";
import MainRace from "./components/MainRace";
import { useDispatch } from "react-redux";
import * as actions from "./redux/actionTypes";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100vh;
    min-height: 100vh;
    width: 100%;


    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.font.primary};
    font-size: calc(1vw + 1vh + 3px);

    @media screen and (max-width: 768px) {
      font-size: calc(1vw + 1vh + 8px)
    }
  }

  #root {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button, input {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;

    :visited {
      color: inherit;
    }

    :hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

`;

const App = () => {
  const [page, setPage] = useState("Practice");
  const dispatch = useDispatch();

  const handleSetPage = (newPage: string) => {
    setPage(newPage);
    if (newPage === "Practice") {
      dispatch({ type: actions.RACE_STATE_CHOOSING });
      dispatch({
        type: actions.RACE_DATA_UPDATE,
        payload: {
          name: "",
          gameID: "",
        },
      });
    } else if (newPage === "Race") {
      dispatch({ type: actions.GAME_RESET });
    }
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Header handleSetPage={handleSetPage} page={page} />
        {page === "Practice" ? <MainPractice /> : <MainRace />}

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
